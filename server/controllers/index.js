var models = require('../models');
var bluebird = require('bluebird');
//var parser = require('body-parser');



module.exports = {
  messages: {
    get: function (req, res) { }, // a function which handles a get request for all messages
    post: function (req, res) { } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //console.log('outside end');
       //var bodyObject = parser.json(req.body);
       //console.log(req.body.username);
       //console.log('inside post', bodyObject.username);
      /*
      req.on('end', function () {
        console.log('inside response end');
        models.users.post(req.body.username);
        res.end('posting username');
      })*/

      models.users.post(req.body.username);
    }
  }
};

