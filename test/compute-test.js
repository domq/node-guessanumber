/**
 * Created by nborboen on 10.10.14.
 */

var assert = require("assert");
var compute_module = require("../calculator/compute");
var compute = compute_module.compute,
    single_operation = compute_module.single_operation,
    split_operation = compute_module.split_operation;


describe("split_operation", function () {
    it ("splits", function () {
        assert.deepEqual(split_operation("1+2+7", "+"), ["1+2", "7"]);
        assert.deepEqual(split_operation("1+2+", "+"), ["1+2", ""]);
        assert.deepEqual(split_operation("+", "+"), ["", ""]);
        assert.deepEqual(split_operation("   +", "+"), ["   ", ""]);
    })
});
describe("compute", function () {
    it("does no operqtion", function () {
        assert.equal(compute("2"), 2);
    });
    it("does basic additions", function () {
        assert.equal(compute("2 + 3"), 5);
    });
    it("does basic multiplications", function () {
        assert.equal(compute("2 * 3"), 6);
    });
    it("does divisions", function () {
        assert.equal(compute("5 / 2"), 2.5);
    });
    it("does power", function () {
        assert.equal(compute("5 ^ 2"), 25);
    });

    it("does two additions", function () {
        assert.equal(compute("1 + 2 + 7"), 10);
    });
    it("does three additions", function () {
        assert.equal(compute("1 + 2 + 7 + 10"), 20);
    });
    it("does two subtractions", function () {
        assert.equal(compute("1 - 2 - 7"), -8);
    });
    it("does a lot of operations" , function () {
        assert.equal(compute("1 + 2 + 3 + 4 + 1"), 11);
    });
    it("does a lot of operations subtractions" , function () {
        assert.equal(compute("1 - 2 - 3 - 4 - 1"), -9);
    });
    it("does a lot of operations with mutl" , function () {
        assert.equal(compute("1 * 2 + 3 + 4 + 1"), 10);
    });
    it("does a lot of operations with mutl" , function () {
        assert.equal(compute("1 + 2 + 3 + 4 * 1"), 10);
    });
    it("does something really weird", function () {
        assert.equal(compute("1 + 2 * 3"), 7);
    });
    it("does a lot of operations with two mutl" , function () {
        assert.equal(compute("1 + 2 * 3 + 4 * 1"), 11);
    });
    it("does a lot of different operations" , function () {
        assert.equal(compute("1 +       2 * 3 +       4 * 1 * 15"), 67);
    });
});

describe("single_operation", function () {
   it("performs one operation with two operands", function () {
      assert.equal(single_operation("+", 5, 7), 12);
   });
});