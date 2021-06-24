const Prompt = require('./prompt');
const Search = require('./search');
const ReadingList = require('./reading_list');

class Menu {
    constructor() {
        this.menuChoices = ['[1]. Search books', '[2]. View your book list', '[3]. Quit']
        this.currentChoice = ''; 
        this.search = new Search(); 
        this.list = new ReadingList(this); 
        this.prompt = new Prompt()
    }

    async mainMenu() {
        console.log('Welcome to Tom\'s Google Book\'s Application!')
        this.currentChoice = this.prompt.promptUser('Please choose an option from below (enter 1, 2, or 3):', this.menuChoices); 

        if(this.currentChoice === '1') {
            await this.searchInput();

        } else if(this.currentChoice === '2') {
            let listCount = Object.values(this.list.collection).length; 
            if(listCount > 0 ) {
                this.displayResults(Object.values(this.list.collection));  
                this.prompt.promptUser('To return to the main menu press return.');
                this.mainMenu(); 
            } else {
                console.log('----------')
                console.log('no books found')
                console.log('----------')
                this.mainMenu(); 
            }
        } else if(this.currentChoice === '3') {
            console.log('Goodbye!\n')
            return; 
        } else {
            console.log('Input not recognized.\n')
            this.mainMenu(); 
        }
    }

    async searchInput() {
        console.log('----------');
        console.log('Please provide a title and/or author to search by:')
        let titleInput = this.prompt.promptUser('Search by book title:');
        let authorInput = this.prompt.promptUser('Search by author:');

        if(titleInput === '' && authorInput === '') {
            console.log('Either title or author input is required!');
            await this.searchInput()
        } else {
            await this.search.searchBook(titleInput, authorInput);

            let resultsCount = this.search.results.length; 

            if(resultsCount > 0) {
                this.displayResults(this.search.results); 
                this.saveResults();
            } else {
                console.log('could not find that book, please try again.')
                this.searchInput(); 
            }
        }
    }

    displayResults(results=[]) {

        if(this.search.error !== '') {
            console.log('There was an error: ', this.search.error);
        } else if(results.length > 0) {
            for(let i = 0; i < results.length; i++) {
                let {volumeInfo: {title, authors, publisher}} = results[i];
                console.log(`Result: [${i + 1}]`);
                console.log(`Title: ${title ? title : 'unavailable'}`);
                console.log(`Author(s): ${authors ? (authors.length > 0 ? authors.join(", ") : author[0]) : 'unavailable'}`)
                console.log(`Publisher: ${publisher ? publisher : 'unavailable'}`)
                console.log(`\n----------\n`)
            }
        } 
    }

    saveResults() {
        let input = this.prompt.promptUser('Enter the result # of the books you want to save, i.e. 1 2 3, OR \'quit\' to return to the main menu to view your list or perform a new search.').split(" "); 
        let uniqueIds = new Set(); 

        if(input[0] === 'quit') {
            this.mainMenu()
        } else if(input.length > 0) {

            for(let id of input) {
                let intId = parseInt(id) - 1;
                if(!isNaN(intId) && intId >= 0 && intId < this.search.results.length) {
                    uniqueIds.add(intId)
                }
            } 

            if(Array.from(uniqueIds).length > 0) {
                for(let id of uniqueIds) {
                    if(this.list.collection[this.search.results[id].id]) {
                        console.log(`${this.search.results[id].volumeInfo.title} has already been saved.`)
                    } else {
                        this.list.addBook(this.search.results[id])
                    }
                }
                console.log('\nAdded books to your list, return to main menu to see your list\n')
                this.saveResults(); 
            } else {
                console.log('\nThe result #\'s you provided did not match the search results.\n')
                this.saveResults(); 
            }
        }

    }


}

module.exports = Menu; 

/**
 * handles prompting users 
 * handles passing input to search 
 * handles reading and displaying the search results
 * handles saving the search results 
 * handles reading the readinglist 
 * handles quitting 
 * 
 * 
 */