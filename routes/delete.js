var express = require('express');
var router = express.Router();
var Page = require('../models/index.js').Page;


router.get('/:page_url', function(req,res,next){
	var page_url = req.params.page_url
	Page.findOneAndRemove( { url_name: page_url }, function(err,data){
    if(err) console.log("err:",err)
    console.log("data:",data);
		res.redirect('/')
	})
})

module.exports = router;
