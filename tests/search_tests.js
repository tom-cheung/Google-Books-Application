const chai = require('chai');
const expect = chai.expect; 
const Search = require('../src/search');
const Menu = require('../src/menu');
const ReadingList = require('../src/reading_list');

describe('Search Tests', function() {
    it('Should create a Search object', () => {
        let menu = new Menu();
        let readingList = new ReadingList(menu);
        let newSearch = new Search(readingList, menu); 

        expect(newSearch).to.not.equal(undefined); 
        expect(newSearch.results).to.be.an('array').that.is.empty;
    });
})