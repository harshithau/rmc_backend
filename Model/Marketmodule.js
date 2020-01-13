const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marketSchema = new Schema({
  marketName: {
    type: 'String',
    required: true
  }
  
})
module.exports = mongoose.model('markets', marketSchema);