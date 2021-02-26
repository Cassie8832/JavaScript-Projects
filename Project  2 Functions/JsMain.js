function My_First_Function() {//defing and naming my first function
    var str = "This text is red!";//giving the variable a value
    var result = str.fontcolor("red");//font color
    document.getElementById("Red_Text").innerHTML = result;//the result of the element with Red_Text id
}
function myFunction() {//defing and naming the function for the p element
    var sentence = "I am learning";//defining a variable and giving it a string value
    sentence += " a lot from this book!";//using the += operator to concatenate
    document.getElementById("Concatenate").innerHTML = sentence;//giving a value of the result into HTML element Concatenate id
}
function functionGreen() {
    var x = document.getElementById("Green_Text");
    x.style.color = "green";
    x.style.backgroundColor = "pink";
}
