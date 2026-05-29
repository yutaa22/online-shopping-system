const mongoose = require('mongoose');

const Product = require('./models/Product');

mongoose.connect(
  'mongodb://127.0.0.1:27017/shoppingDB'
);

const products = [

  {
    name: 'Laptop',
    description: 'High Performance Gaming Laptop',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    category: 'Electronics'
  },

  {
    name: 'Phone',
    description: 'Latest Smartphone',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    category: 'Electronics'
  },

  {
    name: 'Headphones',
    description: 'Wireless Headphones',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Accessories'
  }

];

async function seedData() {

  await Product.deleteMany();

  await Product.insertMany(products);

  console.log('Products Inserted');

  process.exit();
}

seedData();