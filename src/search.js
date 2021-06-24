const axios = require('axios');
const Prompt = require('./prompt'); 

const APIKEY = 'AIzaSyDwWl6oDb31K5tHyKcmmlNNHe1Njh4Relg';

class Search {
    constructor() {
        this.results = []; 
        this.error = "";
    }

    async searchBook(title='', author='') {
        try {
            this.results = [];
            let searchResults = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title === '' ? '' : title}${author === '' ? '' : '+inauthor:' + author}&key=${APIKEY}`)
            let status = searchResults.status; 

            if(status === 200) {
                if(searchResults.data.totalItems > 0) {
                    // only save up to 5 results 
                    for(let i = 0; i < 5; i++) {
                        let book = searchResults.data.items[i];
                        if(book) this.results.push(book);
                    }
                } 
            } else {
                this.error = 'could not reach Google books API!!!'; 
            }
        }
        catch(err) {
            this.error = err; 
            console.log(err)
        }
    }
}

module.exports = Search; 

