const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products
  // res.render('shop', {
  //   prods: products,
  //   pageTitle: 'Shop',
  //   path: '/',
  //   hasProducts: products.length > 0,
  //   productCSS: true,
  //   mainCSS:true,
  //   activeShop: true
  // })
  res.render('shop', {prods:products, pageTitle:'Shop'})
});

module.exports = router;
