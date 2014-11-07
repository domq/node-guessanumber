var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

test.describe('Web interface', function() {
    var server = require("../calculator/calc.js");
    test.it('should work', function() {
        var driver = new webdriver.Builder().withCapabilities(
            webdriver.Capabilities.chrome()).build();

        driver.get("http://127.0.0.1:1337");
        var searchBox = driver.findElement(webdriver.By.name('Zonecalcul'));
        searchBox.sendKeys('12 + 23');
        searchBox.getAttribute('value').then(function(value) {
            assert.equal(value, '12 + 23');
            driver.findElement(webdriver.By.css("input[type='submit']")).click();
            var source = driver.getPageSource().then(function (value) {
                assert(value.indexOf("35") > -1);
            });
        });
        driver.quit();
    });
});
