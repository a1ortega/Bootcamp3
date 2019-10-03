//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

//I had to indicate the database in the string

module.exports = {
  db: {
     uri: 'mongodb+srv://cenAdmin:HelloPass@cluster0-m7ct7.mongodb.net/test?retryWrites=true&w=majority', //place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'f66becaea78841f1ab9ec4cee27cb738' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};