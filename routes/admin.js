const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  // productCSS and other for handlebars

  // res.render('add-product', {
  //   pageTitle: 'Add product',
  //   path: '/admin/add-product',
  //   productCSS: true,
  //   mainCSS:true,
  //   formsCSS:true,
  //   activeProducts: true
  // })
  res.render('add-product', {pageTitle:'Add product'})
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
