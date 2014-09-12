/**
 * New module.
 */

var http = require('http');
var url = require('url');

function guessANumberGame (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write ("<form><input type=text name=input>" +
        "<input type=submit value='OK''><br>");
    res.write ("</form>");
    if (query.input) {
        res.write("Your attempt: " + query.input + "<br>");
        var gues = query.input ;
        var answer =42 ;
        if (gues < answer) {
            res.write('Too small');
        }
        else if (gues > answer) {
            res.write('Too big');
        }
        else {
            res.write('Bullseye');
        }
    } else {
        res.write('Type a number.');
    }
    res.end();
}

http.createServer(guessANumberGame).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

