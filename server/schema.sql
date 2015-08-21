#CREATE DATABASE chat;

USE chat;

-- create users table
CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  user_name VARCHAR(15),
  password VARCHAR(10),
  PRIMARY KEY (id)

);

-- create rooms table
CREATE TABLE chatrooms (
  id INT AUTO_INCREMENT NOT NULL,
  room_name VARCHAR(25),
  PRIMARY KEY (id)
);


CREATE TABLE messages (
  /* Describe your table here.*/
    id INT AUTO_INCREMENT NOT NULL,
    message_text TEXT NOT NULL,
    user_id INT NOT NULL,
    chatroom_id INT NOT NULL,
    created_at TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (chatroom_id) REFERENCES chatrooms (id)
);

/* Create other tables and define schemas for them here! */





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

