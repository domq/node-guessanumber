/**
 * Very simple calculator interface
 */

var http = require('http');
var url = require('url');

function compute(expr) {
    var calctype;

    try {
        var resultat;



        if (expr.indexOf("+")>=0) {
            calctype="addition";
            var split = expr.split('+');
            var operand1 = split[0];
            var operand2 = split[1];
            operand1=Number(operand1);
            operand2=Number(operand2);
            resultat=String(operand1+operand2);
        }
        else if (expr.indexOf("-")>=0) {
            calctype="soustraction";
            var split = expr.split('-');
            var operand1 = split[0];
            var operand2 = split[1];
            operand1=Number(operand1);
            operand2=Number(operand2);
            resultat=String(operand1-operand2);
        }
        else if (expr.indexOf("/")>=0) {
            calctype="division";
            var split = expr.split('/');
            var operand1 = split[0];
            var operand2 = split[1];
            operand1=Number(operand1);
            operand2=Number(operand2);
            resultat=String(operand1/operand2);
        }
        else if (expr.indexOf("*")>=0) {
            calctype="multiplication";
            var split = expr.split('*');
            var operand1 = split[0];
            var operand2 = split[1];
            operand1=Number(operand1);
            operand2=Number(operand2);
            resultat=String(operand1*operand2);
        }
    } catch (e) {
        return "ERROR: " + String(e);
    }
    return resultat;
}

function calculator (req, res) {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    if (query) {
        var Zonecalcul= query.Zonecalcul;
    }
    var resultat = compute(Zonecalcul);


    // send headers
    res.writeHead(200, {'Content-Type': 'text/html'});
    // HTML page begins
    res.write (writeHTMLHead());
    // HTML body with calculator content

    res.write (writeHTMLBody(resultat));

    // HTML page ends
    res.write (writeHTMLBottom());
    // Close response
    res.end();
}

http.createServer(calculator).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

/**
 * @param pageTitle
 * @returns Basic HTML Header
 */
function writeHTMLHead(pageTitle) {
    pageTitle = typeof pageTitle !== 'undefined' ? pageTitle : 'Hello Dojo';
    var HTMLhead = '<!DOCTYPE html>';
    HTMLhead += '\n<html>';
    HTMLhead += '\n\t<head>';
    HTMLhead += '\n\t\t<meta charset=utf-8 />';
    HTMLhead += '\n\t\t<title>'+pageTitle+'</title>';
    HTMLhead += '\n\t</head>';
    HTMLhead += '\n\t<body>\n';
    console.log(' ...HTMLhead transmitted');
    return HTMLhead;
}

/**
 * @returns The caclulator HTML code
 */
function writeHTMLBody(resultat) {
    var HTMLbody = '    <body>' +
        '<h1>My calculator</h1>' +
        '<form id="calculator">' +
        '<div>' +
        '    <div style="float:left; padding-right:15px;">calculation:<br><input type="text" name="Zonecalcul" id="Zonecalcul"></div>' +
        '            <div style="float:left; padding-right:15px;"><input type="submit" id="my_calc_submit" value="Show Result"></div>' +
        '                <div id="my_result" name="my_result" style="float:left;font-size:10em;">'+resultat+' <!-- my result should be displayed here --></div>' +
        '            </div>' +
        '        </form>' +
        '            <div style="clear:both"></div>' +
        '            <div id="my_error" name="my_error" style="font-size:2em;color:#f00;"><!-- my error should be displayed here --></div>';
    console.log(' ...HTMLbody transmitted');
    return HTMLbody;
}

/**
 * @returns Basic HTML to close page
 */
function writeHTMLBottom() {
    var HTMLBottom = '\n\t</body>';
    HTMLBottom += '\n</html>';
    console.log(' ...HTMLbottom transmitted');
    return HTMLBottom;
}