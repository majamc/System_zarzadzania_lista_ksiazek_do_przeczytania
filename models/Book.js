const { getDatabase } = require("../database");
const mongodb = require("mongodb");

class Book {
  constructor(title, authors, thumbnail, categories, status = 'unread', id) {
    this.title = title;
    this.authors = authors;
    this.thumbnail = thumbnail;
    this.categories = categories;
    this.status = status;
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

  static async getLastAdded() {
    const db = getDatabase();
    const lastBook = await db.collection("books")
      .find()
      .sort({ _id: -1 }) // sortuje od najnowszych
      .limit(1)
      .toArray();
    return lastBook[0]; // tylko jedna książka
  }


  static async filter({ author, category, status }) {
    const db = getDatabase();
    const query = {};

    if (author) {
      query.authors = { $regex: new RegExp(author, "i") };
    }

    if (category) {
      query.categories = { $regex: new RegExp(category, "i") };
    }

    if (status) {
      query.status = status;
    }

    console.log("QUERY:", query); // debug
    return db.collection("books").find(query).toArray();
  }

  static async markAsRead(bookId) {
    const db = getDatabase();
    return db.collection("books").updateOne(
      { _id: new mongodb.ObjectId(bookId) },
      { $set: { status: "read" } }
    );
  }

  static updateStatus(bookId, status) {
    const db = getDatabase();
    return db.collection("books").updateOne(
      { _id: new mongodb.ObjectId(bookId) },
      { $set: { status } }
    );
  }

}



module.exports = Book;
