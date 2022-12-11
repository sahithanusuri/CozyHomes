const Property = require('../models/properties')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const addproperty = (req,res,next) => {
  var property = new Property(); // new instance of a property

  property.title = req.body.title;
  property.nightlyfee = req.body.nightlyfee;
  property.propertytype = req.body.propertytype;
  property.cleaningfee = req.body.cleaningfee;
  property.description = req.body.description;
  property.amenities = req.body.amenities;
  property.servicefee = req.body.servicefee;
  property.bedrooms = req.body.bedrooms;
  property.city = req.body.city;
  property.location = req.body.location;
  property.occupied = req.body.occupied;
  property.comments = req.body.comments;
  property.stars = req.body.stars
  if(req.file){
    property.allimage = req.file.path
  }
  property.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Property was successfully added'});
  });
}

const getallproperties = (req, res, next) => {
  Property.find(function(err, properties) {
    if (err) {
      res.send(err);
    }
    res.json(properties);
  });
}

const addcomments = (req, res, next) => {
  Property.findById(req.params.id,(err,property) =>{
    if (err){
      res.send(err);
    }

    var temp1 = property.comments;
    var temp2 = property.stars
    temp1.push(req.body.comments);
    temp2.push(req.body.stars)
    property.comments = temp1;
    property.stars = temp2;
    property.save(err =>{
      if (err){
        res.send(err);
      }
      res.json({message:"Property name updated"});
    })
  })
}

const getcities = (req, res, next) => {
  Property.find({city:req.params.city}, function(err, property) {
    if (err) {
      res.send(err);
    }
    res.json(property);
  });
}

const gettypes = (req, res, next) => {
  Property.find({type:req.params.type}, function(err, property) {
    if (err) {
      res.send(err);
    }
    res.json(property);
  });
}


module.exports = {
  addproperty, getallproperties, addcomments, getcities, gettypes
}
