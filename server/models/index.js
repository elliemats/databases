var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (data, cb) {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function(userData, cb) { insertUser(userData); }
  }
};

var insertUser = function(userObject){
      //if there is a key of username then insert
  console.log('Running insertUser');

  if(userObject["username"] !== undefined){
   userObject["password"] =  userObject["password"] || '';
   //insert into user table, username and password
   db.query(
     'INSERT INTO users ' +
     '(user_name, password) VALUES ("'+
     userObject["username"] + '","' + userObject["password"]  +
     '");',
     function(err, rows, fields){
       if(err) throw err;
       }
     }
   );
  }
}

