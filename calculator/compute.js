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

       ["+","-","*","/","^"].forEach(function (op) {
           if (expr.indexOf(op)>=0) {
               var splitPieces = split_operation(expr, op);

               var beginningOfExpression = splitPieces[0],
                   secondOperand = splitPieces[1];

               var firstOperand = beginningOfExpression;
               ["+", "-", "*", "/", "^"].forEach(function (op) {
                   if (beginningOfExpression.indexOf(op) >= 0) {
                       var beginningOfExpressionPieces = split_operation(beginningOfExpression, op);

                       firstOperand = single_operation(op, beginningOfExpressionPieces[0], beginningOfExpressionPieces[1]);
                   }
               });
               resultat = single_operation(op, firstOperand, secondOperand);
           }
       });
    } catch (e) {
        return "ERROR: " + String(e);
    }
    return String(resultat);
}
