const mongoose = require('mongoose');

const schema =new mongoose.Schema({
  name: 
  { 
    type: String, 
  },
});
const person=new mongoose.model('Person', schema);
module.exports = person;


