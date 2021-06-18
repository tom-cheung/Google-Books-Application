const Prompt = require('./prompt'); 

class ReadingList {
    constructor(Menu) {
        this.collection = {}; 
        this.menu = Menu; 
    }

    addBook(book) {
        book ? this.collection[book.id] = book : console.log('Could not add this book');
    };

    viewBooks() {
        let allBooks = Object.values(this.collection)
        if(allBooks.length > 0) {
            for(let i = 0; i < allBooks.length; i++) {
                let {volumeInfo: {title, authors, publisher}} = allBooks[i];
                console.log(`Result [${i + 1}]`);
                console.log(`Title: ${title ? title : 'unavailable'}`);
                console.log(`Author(s): ${authors ? (authors.length > 0 ? authors.join(", ") : author[0]) : 'unavailable'}`)
                console.log(`Publisher: ${publisher ? publisher : 'unavailable'}`)
                console.log(`\n----------\n`)
            }
            let newPrompt = new Prompt(); 
            newPrompt.promptUser('To return to the main menu press return.')
            this.menu.mainMenu(); 
        } else {
            console.log('Your list is empty.\n')
            this.menu.mainMenu(); 
        }

    }
}

module.exports = ReadingList; 