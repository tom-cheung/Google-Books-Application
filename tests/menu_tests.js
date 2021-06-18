const chai = require('chai');
const expect = chai.expect; 
const Menu = require('../src/menu');

describe('Menu Tests', function() {
    it('Should create a Menu object', () => {         
        let menu = new Menu()

        expect(menu).to.not.equal(undefined);
    })
})