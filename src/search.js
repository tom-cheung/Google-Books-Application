const axios = require('axios');
const Prompt = require('./prompt'); 

const APIKEY = 'AIzaSyDwWl6oDb31K5tHyKcmmlNNHe1Njh4Relg';

class Search {
    constructor(BookCollection, Menu) {
        this.titleInput = ''; 
        this.authorInput = ''; 
        this.results = []; 
        this.collection = BookCollection;
        this.menu = Menu; 
 
    }

    requestInput(question, choices=[]) {
        let newPrompt = new Prompt(); 
        newPrompt.promptUser(question, choices);
        return newPrompt.userInput; 
    }

    performSearch() {
        console.log('Please provide either a title or author to search by:')
        this.titleInput = this.requestInput('Search by book title:');
        this.authorInput = this.requestInput('Search by author:');

        if(this.titleInput === '' && this.authorInput === '') {
            console.log('Either title or author input is required!');
            this.performSearch();
        } else {
            this.searchBook(this.titleInput, this.authorInput)
        }
    }

    async searchBook(title, author) {
        try {
            let searchResults = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title === '' ? '' : title}${author === '' ? '' : '+inauthor:' + author}&key=${APIKEY}`)
            let status = searchResults.status; 

            if(status === 200) {
                if(searchResults.data.totalItems > 0) {
                    // only save up to 5 results 
                    for(let i = 0; i < 5; i++) {
                        let book = searchResults.data.items[i];
                        if(book) this.results.push(book);
                    }
                    console.log('hi from 50')
                    this.displayResults(); 
                    this.saveBook(); 
                } else {
                    console.log('nothing found')
                }
            } else {
                console.log('could not reach Google Books API!!!')
            }
        }
        catch(err) {
            console.log(err)
        }
    }

    displayResults() {
        if(this.results.length > 0) {
            for(let i = 0; i < this.results.length; i++) {
                let {volumeInfo: {title, authors, publisher}} = this.results[i];
                console.log(`Book ID: [${i + 1}]`);
                console.log(`Title: ${title ? title : 'unavailable'}`);
                console.log(`Author(s): ${authors ? (authors.length > 0 ? authors.join(", ") : author[0]) : 'unavailable'}`)
                console.log(`Publisher: ${publisher ? publisher : 'unavailable'}`)
                console.log(`\n----------\n`)
            }
        } else {
            console.log('no results to display')
        }
    }

    saveBook() {
        let newPrompt = new Prompt();
        let bookIds = newPrompt.promptUser("Enter the ID of books you want to save, i.e. 1 2 3, OR quit to return to the main menu"); 
        let formattedIds = bookIds.split(" ");
        let matchingIds = new Set(); 

        if(bookIds === 'quit') {
            this.menu.mainMenu(); 
        } else if(formattedIds.length > 0) {

            for(let id of formattedIds) {
                let intId = parseInt(id) - 1;
                if(intId >= 0 && intId < this.results.length ) {
                    matchingIds.add(intId)
                }
            }

            console.log(matchingIds); // {0, 1, 2}

            if(Array.from(matchingIds).length > 0) {
                for(let id of matchingIds) {
                    console.log(id);
                    this.collection.addBook(this.results[id]);
                }
                console.log("\nAdded books to your list, return to main menu to see your list\n")
                this.saveBook(); 
            } else {
                console.log("\nThe id(s) you provided did not match the search results.\n")
                this.saveBook(); 
            }
        }

    }
}

module.exports = Search; 

