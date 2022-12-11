var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertiesSchema = new Schema({
  // name: String,
  title: String,
  description: String,
  nightlyfee: String,
  cleaningfee:String,
  propertytype: String,
  amenities: String,
  servicefee:String,
  bedrooms:String,
  city: String,
  location: String,
  occupied:[String],
  comments:[String],
  stars:[String],
  // allimage: String
});

module.exports = mongoose.model('Properties', PropertiesSchema);
