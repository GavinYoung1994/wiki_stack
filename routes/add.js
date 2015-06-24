var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('add');
});

router.post('/submit',function(req, res){
	var models = require('../models/');
	var title=req.body.page_title;
	var content=req.body.page_content;
	var generateUrlName = function(name) {
	  if (typeof name != "undefined" && name !== "") {
	    return name.replace(/\s/ig, '_').replace(/\W/ig,'');
	  } else {
	  	title = Math.random().toString(36).substring(2,7)
	    return title;
	  }
	};
	var url_name = generateUrlName(title);
	var page = new models.Page({ 'title': title, 'content': content, 'url_name': url_name });
	page.save();
	res.redirect('/');
});

module.exports = router;
