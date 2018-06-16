var express = require('express');
var router = express.Router();

router.get('/books/list', function(req, res){
	res.json({title:"Green Eggs and Ham", author: "Dr. Seuss", status: "read"});
});

module.exports = router;
