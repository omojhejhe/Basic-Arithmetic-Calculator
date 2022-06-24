// program for a Basic Arithmetic Calculator

const operator = prompt('Enter your choice of Operator ( either +, -, * or / ): ');

const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);