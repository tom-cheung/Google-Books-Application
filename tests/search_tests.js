const chai = require('chai');
const expect = chai.expect; 
const Search = require('../src/search');
const Menu = require('../src/menu');
const ReadingList = require('../src/reading_list');

describe('Search Tests', function() {
    it('Should create a Search object', () => {
        let newSearch = new Search(); 

        expect(newSearch).to.not.equal(undefined); 
        expect(newSearch.results).to.be.an('array').that.is.empty;
    });
    it('Should save results from a search', () => {
        let newSearch = new Search();

        newSearch.results.push({id: '123', volumeInfo: {title: 'Good Book', authors: ['Good Author'], publisher: 'Good Publisher'}});
        newSearch.results.push({id: '456', volumeInfo: {title: 'Great Book', authors: ['Great Author'], publisher: 'Great Publisher'}});

        expect(newSearch.results).to.be.an('array').that.is.not.empty;
    })

})