const Prompt = require('./prompt');
const Search = require('./search');
const ReadingList = require('./reading_list');

class Menu {
    constructor() {
        this.menuChoices = ['[1]. Search books', '[2]. View your book list', '[3]. Quit']
        this.currentChoice = ''; 
        this.newList = new ReadingList(this); 
    }

    mainMenu() {
        console.log('Welcome to Tom\'s Google Book\'s Application!')
        let newPrompt = new Prompt(); 
        this.currentChoice = newPrompt.promptUser('Please choose an option from below (enter 1, 2, or 3):', this.menuChoices); 
        
        if(this.currentChoice == 1) {
            let newSearch = new Search(this.newList, this); 
            console.log('----------');
            newSearch.performSearch(); 
        } else if(this.currentChoice == 2) {
            this.newList.viewBooks(); 
        } else if(this.currentChoice == 3) {
            console.log('Goodbye!\n')
            return; 
        } else {
            console.log('Input not recognized.\n')
            this.mainMenu(); 
        }
    }


}

module.exports = Menu; 

