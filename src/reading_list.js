const Prompt = require('./prompt'); 

class ReadingList {
    constructor(Menu) {
        this.collection = {}; 
        this.menu = Menu; 
    }

    addBook(book) {
        book ? this.collection[book.id] = book : console.log('Could not add this book');
    };
}

module.exports = ReadingList; 