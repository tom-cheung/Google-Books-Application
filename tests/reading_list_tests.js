const chai = require('chai');
const expect = chai.expect; 
const Menu = require('../src/menu');
const ReadingList = require('../src/reading_list');

describe('ReadingList Tests', function() {
    it('Should create a ReadingList object', () => {
        let menu = new Menu();        
        let readingList = new ReadingList(menu);

        expect(readingList).to.not.equal(undefined);
        expect(readingList.collection).to.be.an('object').that.is.empty;
    }),
    it('Should allow a book to be added', () => {
        let menu = new Menu();        
        let readingList = new ReadingList();
        readingList.addBook({id: '123', volumeInfo: {title: 'Good Book', authors: ['Good Author'], publisher: 'Good Publisher'}});

        expect(readingList.collection).to.have.property("123");
        expect(readingList.collection['123'].volumeInfo).to.have.property('title');
        expect(readingList.collection['123'].volumeInfo.title).to.equal('Good Book');
        expect(readingList.collection['123'].volumeInfo).to.have.property('authors');
        expect(readingList.collection['123'].volumeInfo.authors).to.be.an('array');
        expect(readingList.collection['123'].volumeInfo.authors[0]).to.equal('Good Author');
        expect(readingList.collection['123'].volumeInfo).to.have.property('publisher');
        expect(readingList.collection['123'].volumeInfo.publisher).to.equal('Good Publisher');
    })
})