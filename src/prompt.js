const prompt = require('prompt-sync')(); 
const myModules = require('../util/modules');

class Prompt {
    constructor() {
        this.userInput = ''; 
    }
    
    promptUser(inquiry, choices) {
        let input = myModules.multiLinePrompt(inquiry + ((choices.length === 0 ? `\n` : `\n${choices.join('\n')}\n`)))
        this.userInput = input.trim(); 
        return this.userInput; 
    }

}

module.exports = Prompt; 
