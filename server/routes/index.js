var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var NoteModel = mongoose.model('Note');


router.get('/api/',function(req,res) {
	res.send('Working');
});


router.get('/api/notes', function(req,res) {
	NoteModel.find({},function(err,docs) {
		if(err) {
			res.send({error:err});
		}
		else {
			res.send({note:docs});
		}
	});
});

module.exports = router;
