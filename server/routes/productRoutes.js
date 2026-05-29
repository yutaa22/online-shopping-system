const express = require('express');

const Product = require('../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {

  const search = req.query.search || '';

  const products = await Product.find({

    name: {
      $regex: search,
      $options: 'i'
    }

  });

  res.json(products);
});

router.get('/:id', async (req, res) => {

  const product = await Product.findById(
    req.params.id
  );

  res.json(product);
});

module.exports = router;