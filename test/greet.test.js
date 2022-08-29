
import assert from 'assert';
import greet from '../greet.js';

describe("The greet function", function() {
    
    it("should be able to greet Joe", function() {
        
        assert.equal('Hello, Joe', greet("Joe"));

    });

    it("should be able to greet Sihle", function() {
        
        assert.equal('Hello, Sihle', greet("Sihle"));

    });

})