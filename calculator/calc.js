/**
 * Very simple calculator interface
 */

var http = require('http');
var url = require('url');

function calculator (req, res) {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var Operand_1 = query.Operand_1;
    var Operand_2 = query.Operand_2;
    var instruction = query.instruction;
    var resultat;


    // send headers
    res.writeHead(200, {'Content-Type': 'text/html'});
    // HTML page begins
    res.write (writeHTMLHead());
    // HTML body with calculator content
    //res.write (writeHTMLBody());

     if (instruction == "add") {
         resultat= Number(Operand_1)+Number(Operand_2);
     } else if (instruction == "min") {
         resultat= Number(Operand_1) - Number(Operand_2);
     } else if (instruction == "mul") {
         resultat= Number(Operand_1) * Number(Operand_2);
     } else if (instruction == "div") {
         resultat= Number(Operand_1) / Number(Operand_2);
     }
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
        '    <div style="float:left; padding-right:15px;">My first operand:<br><input type="text" name="Operand_1" id="Operand_1"></div>' +
        '        <div style="float:left; padding-right:15px;">' +
        '            <input type="radio" name="instruction" value="add"/> + | Addition<br />' +
        '            <input type="radio" name="instruction" value="min"/> - | Subtraction<br />' +
        '            <input type="radio" name="instruction" value="mul"/> * | Multiplication<br />' +
        '            <input type="radio" name="instruction" value="div"/> / | Division<br />' +
        '        </div>' +
        '        <div style="float:left; padding-right:15px;">My second operand:<br><input type="text" name="Operand_2" id="Operand_2"></div>' +
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