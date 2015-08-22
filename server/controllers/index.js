var models = require('../models');
var bluebird = require('bluebird');
//var parser = require('body-parser');



module.exports = {
  messages: {
    get: function (req, res) { }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body;
      models.messages.post(message);
      res.send("Adding " + req.body.message + "to messages.");
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var user = req.body;
      models.users.post(user);
      res.send("Adding " + req.body.username + "to users.");
    }
  }
};

