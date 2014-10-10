/**
 * Created by nborboen on 10.10.14.
 */

var assert = require("assert");
var compute = require("../calculator/compute").compute;

describe.only("compute tests", function () {
   it("does basic additions", function () {
       assert.equal(compute("2 + 3"), 5);
   });
    it("does basic multiplications", function () {
        assert.equal(compute("2 * 3"), 6);
    });
});