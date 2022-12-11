const express = require('express')
const router = express.Router()
const PropController = require('../controllers/PropController')
const upload = require('../middleware/upload')

router.post('/',upload.single('allimage'),PropController.addproperty)
router.get('/',PropController.getallproperties)
router.put('/:id',PropController.addcomments)
router.get('/city/:city',PropController.getcities)
router.get('/type/:type',PropController.gettypes)

module.exports = router
