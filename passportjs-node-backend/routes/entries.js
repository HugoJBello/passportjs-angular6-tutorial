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

    newPost.save(function (err) {
      if (err) {
        console.log(err);
        return res.json({ success: false, msg: 'Save entry failed.' });
      }
      res.json({ success: true, msg: 'Successful created new entry.' });
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

router.get('/entries_list/limit=:limit&skip=:skip', function (req, res) {
  let limit;
  let skip;
  if (req.params.limit) {
    limit = parseInt(req.params.limit);
  }
  if (req.params.skip) {
    skip = parseInt(req.params.skip)
  }
  BlogEntry.find({}).limit(limit).skip(skip).exec(function (err, entry) {
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
