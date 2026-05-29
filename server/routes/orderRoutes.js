const express = require('express');

const Order = require('../models/Order');

const router = express.Router();

router.post('/', async (req, res) => {

  const order = new Order({

    items: req.body.items,

    total: req.body.total

  });

  await order.save();

  res.json({
    message: 'Order Placed Successfully'
  });
});

router.get('/', async (req, res) => {

  const orders = await Order.find();

  res.json(orders);
});

module.exports = router;