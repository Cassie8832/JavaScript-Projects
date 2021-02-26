document.write(typeof "word");//typeof string
document.write("/")
document.write(typeof 3);//typeof number
function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('This is a string');//isNaN for string
} 
function my_FunctionNum() {
    document.getElementById("Test#").innerHTML = isNaN('454');//isNaN for number
}
function func_Infinity() {
    X = 9E879;//trying to call result of infinity
    document.getElementById("Infinity").innerHTML = X;
}

function func_NegInfinity() {
    Y = -9E879;//trying to call the result of -infinity
    document.getElementById("-Infinity").innerHTML = Y;
}

function Boolean() {
    var Z = 23 < 21;//boolean logic showing < or > showing false
    document.getElementById("Boolean").innerHTML = Z;
}
console.log(2+2);//console log the value of data 2+2 to show the result 4 in console
document.write("10" + 5);
console.log(20>25);
document.write(10 == 10);
document.write(3 == 10);
var A = 10;//defined variable
var B = 10;
document.write(A === B);//true
var C = "10";
var D = "ten";
var E = "10";
document.write(A === C);
document.write(C === D);//showing equal values of data false
document.write(C === E);//showing equal values to the data true
document.write(20>30 && 10>20);//and function showing true
document.write(30<20 && 10<20);//and function showing false
document.write(10>20 || 10>20);//or function showing true
document.write(10<5 || 10<5);//or function showing false
function not_FunctionFalse() {
    document.getElementById("Not").innerHTML = !(20 >10);//not function showing false
}
function not_FunctionTrue() {
    document.getElementById("Not1").innerHTML = !(20 <10);//not fonction showing true
}