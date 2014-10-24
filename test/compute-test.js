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

    it("does several additions", function () {
        assert.equal(compute("1 + 2 + 7"), 10);
    });
    it("does several subtractions", function () {
        assert.equal(compute("1 - 2 - 7"), -8);
    });
});

describe("single_operation", function () {
   it("performs one operation with two operands", function () {
      assert.equal(single_operation("+", 5, 7), 12);
   });
});