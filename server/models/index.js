var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (messageData, cb) { addMessage(messageData); } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function(userData, cb) { addUser(userData); }
  }
};

var addMessage = function(messageObject){
  //if messageOjbect has username text and chatroom
  if(messageObject['username'] && messageObject['message'] && messageObject['roomname']){
     //add user if doesn't exist
     addUser({ "username": messageObject['username'] });

     //add chatroom if doesn't exist
     addChatroom(messageObject['roomname']);

    db.query(
        'SELECT id FROM users WHERE user_name = "' +
        messageObject['username'] + '";'
        , function(err, results, fields){
          if(err) throw err;

          var user_id = results[0]['id'];

          db.query(
            'SELECT id FROM chatrooms WHERE room_name = "' +
            messageObject['roomname'] + '";'
            , function(err, results, fields){
              if(err) throw err;
              var chatroom_id = results[0]['id'];
              //console.log(chatroom_id);

              //console.log('message text', messageObject['message']);
              db.query('INSERT INTO messages ' +
                '(message_text, user_id, chatroom_id) ' +
                'VALUES ("' +
                 messageObject['message'] + '", "' + user_id + '", "' + chatroom_id + '")', function(err, results){
                 if (err) throw err;
              });
            }
          );
        }
    );
  }
}

var addUser = function(userObject){

  if(userObject["username"] !== undefined){
   //check if username already exists, if no
   db.query('SELECT * FROM users WHERE user_name = "' + userObject["username"] + '";', function(err, results, fields){
     if(results.length === 0 ){
       userObject["password"] =  userObject["password"] || '';
       //insert into user table, username and password
       db.query(
         'INSERT INTO users ' +
         '(user_name, password) VALUES ("'+
         userObject["username"] + '","' + userObject["password"]  +
         '");',
         function(err, results, fields){
           if(err) throw err;
         }
       );
     }
   });
  }
}

var addChatroom = function(chatroomName){
     db.query('SELECT * FROM chatrooms WHERE room_name = "' + chatroomName + '";', function(err, results, fields){
       if(results.length === 0 ){
         db.query(
           'INSERT INTO chatrooms ' +
           '(room_name) VALUES ("'+
            chatroomName +
           '");',
           function(err, results, fields){
             if(err) throw err;
           }
         );
       }
     });

}
