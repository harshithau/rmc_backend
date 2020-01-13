const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteersSchema = new Schema({
    marketId: {
        type:Schema.Types.ObjectId,
        ref:'markets',
        required:true
      },
  volunteerName: {
    type: 'String',
    required: true
  }
  
})
module.exports = mongoose.model('volunteers', volunteersSchema);