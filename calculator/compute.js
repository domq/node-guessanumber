exports.compute = function compute(expr) {
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
