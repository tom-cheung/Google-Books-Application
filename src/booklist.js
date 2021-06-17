// add books, remove books 
// view books
const Prompt = require('./prompt'); 

class BookCollection {
    constructor(Menu) {
        this.collection = new Set(); 
        this.menu = Menu; 
    }

    addBook(book) {
        book ? this.collection.add(book) : console.log("Could not add this book");
    };

    viewBooks() {

        let allBooks = Array.from(this.collection); 
        if(allBooks.length > 0) {
            for(let i = 0; i < allBooks.length; i++) {
                let {volumeInfo: {title, authors, publisher}} = allBooks[i];
                console.log(`Result [${i}]`);
                console.log(`Title: ${title ? title : 'unavailable'}`);
                console.log(`Author(s): ${authors ? (authors.length > 0 ? authors.join(", ") : author[0]) : 'unavailable'}`)
                console.log(`Publisher: ${publisher ? publisher : 'unavailable'}`)
                console.log(`\n----------\n`)

                
            }
            let newPrompt = new Prompt(); 
            newPrompt.promptUser("To return to the main menu press return.")
            this.menu.mainMenu(); 
        } else {
            console.log('Your list is empty.\n')
            this.menu.mainMenu(); 
        }

    }
}

module.exports = BookCollection; 