const roundup = require("../roundup");

const assert = require("assert");
const test_num = 12345.12345;


describe('roundup()', function () {
    it('roundup to 6', function () {
        assert.equal(roundup(test_num, 6), 12345.12345);
    });
    it('roundup to 5', function () {
        assert.equal(roundup(test_num, 5), 12345.12345);
    });
    it('roundup to 4', function () {
        assert.equal(roundup(test_num, 4), 12345.1235);
    });
    it('roundup to 3', function () {
        assert.equal(roundup(test_num, 3), 12345.124);
    });
    it('roundup to 2', function () {
        assert.equal(roundup(test_num, 2), 12345.13);
    });
    it('roundup to 1', function () {
        assert.equal(roundup(test_num, 1), 12345.2);
    });
    it('roundup to 0', function () {
        assert.equal(roundup(test_num, 0), 12346);
    });
    it('roundup to -1', function () {
        assert.equal(roundup(test_num, -1), 12350);
    });
    it('roundup to -2', function () {
        assert.equal(roundup(test_num, -2), 12400);
    });
    it('roundup to -3', function () {
        assert.equal(roundup(test_num, -3), 13000);
    });
    it('roundup to -4', function () {
        assert.equal(roundup(test_num, -4), 20000);
    });
    it('roundup to -5', function () {
        assert.equal(roundup(test_num, -5), 100000);
    });
    it('roundup to -6', function () {
        assert.equal(roundup(test_num, -6), 1000000);
    });
});
