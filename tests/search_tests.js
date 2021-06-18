const chai = require('chai');
const expect = chai.expect; 
const Search = require('../src/search');
const BookList = require('../src/booklist');
const Menu = require('../src/menu');
const ReadingList = require('../src/reading_list');

describe('Search Tests', function() {
    it('Should create a Search object', () => {
        let menu = new Menu();
        let readingList = new ReadingList(menu);
        let newSearch = new Search(readingList, menu); 

        expect(newSearch).to.not.equal(undefined); 
        expect(newSearch.titleInput).to.equal(''); 
        expect(newSearch.authorInput).to.equal('');
        expect(newSearch.results).to.be.an('array').that.is.empty;
        expect(newSearch.readingList).to.equal(readingList);
        expect(newSearch.menu).to.equal(menu);
    });
})