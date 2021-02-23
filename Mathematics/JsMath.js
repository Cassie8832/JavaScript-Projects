function func_Subtraction() {
   var X = 20 - 4;
   document.getElementById("Math").innerHTML = X;//subtraction
}
function func_Addition() {
    var Y = 5 + 5;
    document.getElementById("Add").innerHTML = Y;//addition
}
function func_Multiply() {
    var A = 5 * 3;
    document.getElementById("Multiply").innerHTML = A;//multiplication
}
function func_Division() {
    var B = 30 / 10;
    document.getElementById("Division").innerHTML = B;//division
}
function func_Math() {
    var C = (2 +2) * 10 / 2 -5;
    document.getElementById("SimpleMath").innerHTML = C//multiple math at once
}
function func_Modulus() {
    var D = 65 % 7;
    document.getElementById("Modulus").innerHTML = "The remainder of 50 / 5 is: " + D//finding just the remainder of a division equation, not the result
}
function func_NegationOperator() {
    var E = 27;
    document.getElementById("NegationOperator").innerHTML = -E;//making an operand negative using unary operator negative operator
}
function func_Increment() {
    var F = 3;
    F++;
    document.getElementById("Increment").innerHTML = "F is now: " + F;//incrementing the value
}
function func_Decrement() {
    var G = 4;
    G--;
    document.getElementById("Decrement").innerHTML = "G is now: " + G;//decrementing the value
}
window.alert(Math.random() * 10);//making an alert with a random number 0 - 10
window.alert("That was random!");
function func_MathObject() {
    var H = Math.PI//PI
    document.getElementById("Pi").innerHTML = H
}
function func_Exponent() {
    document.getElementById("Exponent").innerHTML = Math.pow(6, 3);//exponents
} 