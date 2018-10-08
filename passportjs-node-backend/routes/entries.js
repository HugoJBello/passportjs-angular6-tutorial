var express = require('express');
var router = express.Router();
var BlogEntry = require("../models/BlogEntry");
var passport = require('passport');

router.post('/save_entry', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  if (token) {
    console.log(req.body);
    var newPost = new BlogEntry({
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags
    });

    newBook.save(function (err) {
      if (err) {
        return res.json({ success: false, msg: 'Save book failed.' });
      }
      res.json({ success: true, msg: 'Successful created new book.' });
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

router.get('/titled/:title', function (req, res) {
  BlogEntry.findOne({ title: req.params.title }).exec(function (err, entry) {
    if (err) throw err;
    return res.json(entry);
  });
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
