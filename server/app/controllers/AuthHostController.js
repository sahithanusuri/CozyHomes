const Host = require('../models/hosts')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
  bcrypt.hash(req.body. password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err
      })
    }

    let host = new Host({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass
    })
    host.save()
      .then(host =>{
        res.json({
          message:'Host added successfully'
        })
      })
      .catch(error=>{
        res.json({
           message:'An error occured'
        })
      })
  })
}

const login = (req,res,next) => {
  var hostname = req.body.hostname
  var password = req.body.password

  Host.findOne({email:hostname})
    .then(host => {
      if(host){
        bcrypt.compare(password,host.password,function(err,result){
          if(err){
            res.json({
              error:err
            })
          }
          if(result){
            let token = jwt.sign({name:host.name},'verySecretValue',{expiresIn:'1h'})
            res.json({
              message:'Login successful',
              token:token
            })
          }else{
            res.json({
              message:'Invalid'
            })
          }
        })
      }else{
        res.json({
          message:'No host found'
        })
      }
    })
}

const addproperty = (req,res,next) => {
  
}
module.exports = {
  register,login
}
