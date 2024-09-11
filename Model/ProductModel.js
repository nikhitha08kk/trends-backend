
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  prod_name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = new mongoose.model('Product', productSchema);

