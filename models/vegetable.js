const mongoose = require('mongoose');

const vegetableSchema = new mongoose.Schema({
  mobile: { type: String, required: true, unique: true }, 
  name: String,
  location: String,
  time: String,
  day: String,
  vegetables: {
    Tomato: { available: Boolean, price: String, marketprice: String },
    Potato: { available: Boolean, price: String, marketprice: String },
    Beans: { available: Boolean, price: String, marketprice: String },
    Brinjal: { available: Boolean, price: String, marketprice: String },
    Cabbage: { available: Boolean, price: String, marketprice: String },
    "Cauli Flower": { available: Boolean, price: String, marketprice: String },
    Chilli: { available: Boolean, price: String, marketprice: String },
    "Cow Pea": { available: Boolean, price: String, marketprice: String },
    Garlic: { available: Boolean, price: String, marketprice: String },
    Cucumber: { available: Boolean, price: String, marketprice: String },
    Ginger: { available: Boolean, price: String, marketprice: String },
  },
}, { timestamps: true });

const Vegetable = mongoose.model('Vegetable', vegetableSchema);

module.exports = Vegetable;
