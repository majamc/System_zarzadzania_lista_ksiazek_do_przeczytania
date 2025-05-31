const { DB_USER, DB_PASS } = require("./config");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

const mongoConnect = (callback) => {
  MongoClient.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@mvczajecia.4flpzh5.mongodb.net/?retryWrites=true&w=majority`)
    .then((client) => {
      console.log("Connected!");
      database = client.db("googleBook");
      callback();
    })
    .catch((error) => console.log(error));
};

const getDatabase = () => {
  if (!database) {
    throw "No database found!";
  }

  return database;
};

module.exports = { mongoConnect, getDatabase };