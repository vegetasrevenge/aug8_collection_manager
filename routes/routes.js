const router = require('express').Router();
const PKD = require('../models/collecting');

router.get('/', function(req, res) {
  PKD.find({}).then(function(results) {
    res.render('index', { pkd: results })
  })
});

router.post('/', function(req, res) {
  let newBook = new PKD(req.body);  
  newBook.save().then(function(result) {
    console.log(result);
    res.redirect('/');
  }).catch(function(err) {
    console.log(err)
    res.redirect('/');
  });
});


module.exports = router;
