exports.split_operation = split_operation = function (expr, operator){
    var firstOp = expr.lastIndexOf(operator);
    return [expr.substring(0, firstOp), expr.substring(firstOp+1)];
};

exports.single_operation = single_operation = function (op, number1, number2) {
    number1=Number(number1);
    number2=Number(number2);

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

        var operators = ["+","-","*","/","^"];
        for(var i = 0; i < operators.length; i++) {
            var op = operators[i];
            if (expr.indexOf(op) >= 0) {
                found_operator = true;
                var splitPieces = split_operation(expr, op);

                var beginningOfExpression = splitPieces[0],
                    endOfExpression = splitPieces[1];

                var firstOperand = compute(beginningOfExpression);
                var secondOperand = compute(endOfExpression);
                return single_operation(op, firstOperand, secondOperand);
            }
        }
        return expr;
    } catch (e) {
        return "ERROR: " + String(e);
    }
    return String(resultat);
}
