var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

// Deactivated for now: the test really should fire its own Web server.
test.xdescribe('Google Search', function() {
    test.it('should work', function() {
        var driver = new webdriver.Builder().withCapabilities(
            webdriver.Capabilities.chrome()).build();

        driver.get("http://127.0.0.1:1337");
        var searchBox = driver.findElement(webdriver.By.name('input'));
        searchBox.sendKeys('1223');
        searchBox.getAttribute('value').then(function(value) {
            assert.equal(value, '1223');
            driver.findElement(webdriver.By.css("input[type='submit']")).click();
            var source = driver.getPageSource().then(function (value) {
                assert(value.indexOf("Too big") > -1);
            });
            //assert(source.contains("Too big"));
        });
        var searchBox = driver.findElement(webdriver.By.name('input'));
        searchBox.sendKeys('1');
        searchBox.getAttribute('value').then(function(value) {
            //assert.equal(value, '1223');
            driver.findElement(webdriver.By.css("input[type='submit']")).click();
            var source = driver.getPageSource().then(function (value) {
                assert(value.indexOf("Too small") > -1);
            });
            //assert(source.contains("Too big"));
        });
        //driver.quit();
    });
});
