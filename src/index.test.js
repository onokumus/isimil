var expect = require('chai').expect;
var ilAd = require('./index');

describe('ilAd', function() {
    describe('all', function() {
        it('should be an array of strings', function() {
            expect(ilAd.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `ankara`', function() {
            expect(ilAd.all).to.include('ankara');
        });
    });

    describe('random', function() {
        it('should return a random item from ilAd.all', function() {
            var randomItem = ilAd.random();
            expect(ilAd.all).to.include(randomItem);
        });
    });
});
