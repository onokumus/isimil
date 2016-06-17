var uniqueRandomArray = require('unique-random-array');
var ilAd = require('./isimil.json');

module.exports = {
    all: ilAd,
    random: uniqueRandomArray(ilAd)
}
