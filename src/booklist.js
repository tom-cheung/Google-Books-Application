// add books, remove books 
// view books

class BookCollection {
    constructor(Menu) {
        this.collection = []; 
        this.menu = Menu; 
    }

    addBook(book) {
        book ? this.collection.push(book) : console.log("Could not add this book");
    };

    viewBooks() {
        if(this.collection.length > 0) {
            for(let i = 0; i < this.collection.length; i++) {
                let {volumeInfo: {title, authors, publisher}} = this.collection[i];
                console.log(`Result [${i}]`);
                console.log(`Title: ${title ? title : 'unavailable'}`);
                console.log(`Author(s): ${authors ? (authors.length > 0 ? authors.join(", ") : author[0]) : 'unavailable'}`)
                console.log(`Publisher: ${publisher ? publisher : 'unavailable'}`)
                console.log(`\n----------\n`)
            }
        } else {
            console.log('Your list is empty.')
            this.menu.mainMenu(); 
        }

    }
}

module.exports = BookCollection; 