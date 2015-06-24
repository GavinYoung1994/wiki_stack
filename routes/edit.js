var express = require('express');
var router = express.Router();
var Page = require('../models/index.js').Page;


router.get('/:page_url', function(req,res,next){
	var page_url = req.params.page_url
	Page.findOne( { url_name: page_url }, function(err,data){
    var tags = data.tags.join(' ')
    console.log(data);
		res.render('edit', { page: data, tags: tags })
	})
})

router.post('/:page_url/update', function(req,res,next){
	var page_url = req.params.page_url
	Page.findOne( { url_name: page_url }, function(err,data){
    data.title = req.body.page_title;
    data.content = req.body.page_content;
    if (req.body.page_tags) {
      data.tags = req.body.page_tags.split(' ')
    }
    data.save();
    res.redirect('/wiki/'+page_url);
	})
})

module.exports = router;
