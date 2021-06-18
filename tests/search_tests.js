const chai = require("chai");
const expect = chai.expect; 

const Search = require("../src/search");
const BookList = require("../src/booklist");
const Menu = require("../src/menu");
const BookCollection = require("../src/booklist");

describe("Search Tests", function() {
    it('Should create a Search object', () => {
        let menus = new Menu();
        let readingList = new BookCollection(menus);
        let newSearch = new Search(readingList, menus); 

        expect(newSearch).to.not.equal(undefined); 
        expect(newSearch.titleInput).to.equal(""); 
        expect(newSearch.authorInput).to.equal("");
        expect(newSearch.results).to.be.an('array').that.is.empty;
        expect(newSearch.readingList).to.equal(readingList);
        expect(newSearch.menu).to.equal(menus);
    });
})