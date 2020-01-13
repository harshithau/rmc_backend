const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    volunteersId: {
        type:Schema.Types.ObjectId,
        ref:'volunteers',
        required:true
      },
  productName: {
    type: 'String',
    required: true
  },
  productWeight:{
      type:'String',
      required:true
  },
  Amount:{
      type:Number,
      required:true
  }
  
})
module.exports = mongoose.model('products', productSchema);