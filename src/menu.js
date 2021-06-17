const Prompt = require('./prompt');
const Search = require('./search');
const BookCollection = require('./booklist');

class Menu {
    constructor() {
        this.menuChoices = ['[1]. Search books', '[2]. View your book list', '[3]. Quit']
        this.currentChoice = ''; 
        this.bookCollection = new BookCollection(this); 
    }

    mainMenu() {
        console.log('Welcome to Tom\'s Google Book\'s Application!')
        let newPrompt = new Prompt(); 
        this.currentChoice = newPrompt.promptUser("Please choose an option from below (enter 1, 2, or 3):", this.menuChoices); 
        
        if(this.currentChoice == 1) {
            let newSearch = new Search(this.bookCollection, this); 
            console.log("----------");
            newSearch.performSearch(); 
            console.log('=>>> ', newSearch.results.length);
        } else if(this.currentChoice == 2) {
            this.bookCollection.viewBooks(); 
        } else if(this.currentChoice == 3) {
            return; 
        } else {
            console.log("Input not recognized.")
            this.mainMenu(); 
        }
    }


}

let newMenu = new Menu(); 

newMenu.mainMenu();

// the api call is asynchronous, so be careful with how you are depending on the results;  