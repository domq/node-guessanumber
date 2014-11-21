/**
 * Very simple calculator interface
 */

var http = require('http');
var url = require('url');
var compute = require("./compute").compute;

function calculator (req, res) {

    var url_parts = url.parse(req.url, true);

    var query = url_parts.query;
    if (query) {
        var Zonecalcul= query.Zonecalcul;
    }
    var resultat = compute(Zonecalcul);


    res.write (String(resultat));

    // Close response
    res.end();
}


var express = require('express');
var app = express();
var stylus = require('stylus');
var nib = require('nib');



// We use Jade.
app.set('view engine', 'jade');
app.set('view options', { pretty: true });
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    res.render('homepage',
        { title : 'Home' }
    );
});

app.get('/calc', function (req, res) {
    calculator(req, res);
});

app.use(express.static(__dirname));
app.use(stylus.middleware(
    { src: __dirname + '/stylus'
        , compile: function (str, path) {
        return stylus(str)
            .set('filename', path)
            .set('paths', [
                __dirname
                , __dirname + '/node_modules'
            ])
            .use(nib())
        }
    }
));



app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
