import * as mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
  value: Number,
  discount: Number,
});

export const ProductSchema = new mongoose.Schema({
  company: String,
  title: String,
  image: String,
  price: Number,
  rating: Number,
  category: String,
  created_at: { type: Date, default: Date.now },
});
