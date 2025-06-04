const { getDatabase } = require("../database");
const mongodb = require("mongodb");

class Book {
  constructor(title, authors, thumbnail, categories, id) {
    this.title = title;
    this.authors = authors;
    this.thumbnail = thumbnail;
    this.categories = categories;
    if (id) {
      this._id = new mongodb.ObjectId(id);
    }
  }

  save() {
    const db = getDatabase();
    return db.collection("books").insertOne(this);
  }

  static fetchAll() {
    const db = getDatabase();
    return db.collection("books").find().toArray();
  }

  static deleteById(bookId) {
    const db = getDatabase();
    return db.collection("books").deleteOne({ _id: new mongodb.ObjectId(bookId) });
  }
}

module.exports = Book;
