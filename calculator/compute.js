function split_operation(expr, operator){
    var split = expr.split(operator);
    var operand1 = Number(split[0]);
    var operand2 = Number(split[1]);
    return [operand1, operand2];
}

exports.single_operation = single_operation = function (op, number1, number2) {
    switch(op) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*" :
            return number1 * number2;
        case "/" :
            return number1 / number2;
        case "^":
            return Math.pow(number1, number2);
    }
};

exports.compute = function compute(expr) {
    try {
        var resultat;

       ["+","-","*","/","^"].forEach(function (op) {
           if (expr.indexOf(op)>=0) {
               var operands = split_operation(expr, op);
               resultat=single_operation(op, operands[0], operands[1]);
           }
       });


    } catch (e) {
        return "ERROR: " + String(e);
    }
    return String(resultat);
}
