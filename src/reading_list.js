const Prompt = require('./prompt'); 

class ReadingList {
    constructor() {
        this.collection = {}; 
    }

    addBook(book) {
        book ? this.collection[book.id] = book : console.log('Could not add this book');
    };
}

module.exports = ReadingList; 