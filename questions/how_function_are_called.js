/**
 * Simple test about function call
 */

var http = require('http');
function my_test (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Call function 1
    function_1(res);

    // call function 2
    function_2(res);

    res.write('<br><br> Why are my functions called twice in console.log and only once in the browser ?');
    res.end();
}


http.createServer(my_test).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

function function_1(res) {
    res.write('<br> -> function_1 called');
    console.log(' -> function_1 called');
    return true;
}

function function_2(res) {
    res.write('<br> -> function_2 called');
    console.log(' -> function_2 called');
    return true;
}