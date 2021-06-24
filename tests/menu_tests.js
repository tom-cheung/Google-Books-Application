const chai = require('chai');
const expect = chai.expect; 
const Menu = require('../src/menu');

describe('Menu Tests', function() {
    it('Should create a Menu object', () => {         
        let menu = new Menu()

        expect(menu).to.not.equal(undefined);
        expect(menu.list).to.be.an('object');
        expect(menu.search).to.be.an('object');
        expect(menu.prompt).to.be.an('object');
        expect(menu.menuChoices).to.be.an('array');
        expect(menu.currentChoice).to.be.an('string');
    })
})