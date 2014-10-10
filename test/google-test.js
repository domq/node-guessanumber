var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

test.describe('Google test 2', function() {
    test.it('should work', function() {
        var driver = new webdriver.Builder().withCapabilities(
            webdriver.Capabilities.chrome()).build();

        driver.get("http://www.google.com");
        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('webdriver');
        searchBox.getAttribute('value').then(function(value) {
            assert.equal(value, 'webdriver');
        });

         //driver.quit();
    });
});
