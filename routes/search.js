var express = require('express');
var router = express.Router();
var Page = require('../models/index.js').Page;

// router.get('?search_title=',function(req,res,next){
//   var searchTitle = req.body.search_name
//   searchTitle.split('+').joing(" ");
// 	Page.findOne( { title: searchTitle }, function(err, data){
//     var page_url = data.url_name;
// 		res.redirect('/wiki/'+page_url);
// 	});
// })

module.exports = router;
