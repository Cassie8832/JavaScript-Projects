function Call_Loop() {//creating loop to count to ten
    var Digit = "";
    var X = 1;
    while (X < 11) {//while loop
        Digit += "<br>" + X;//added space between outputs
        X++;//increment or add 1
    }
    document.getElementById("Loop").innerHTML = Digit;
}
function Str_Length() {
    var str = "Hello World!";
    var n = str.length;//string length
    document.getElementById("Length").innerHTML = n;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {//for loop
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function cat_pics() {
    var Cat_Picture = [];//array and objects
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}
function constant_function() {//constant variable
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "red";//changed from blue to red
    Musical_Instrument.price = "$900";
    Musical_Instrument.brand = "Gibson";//added property with value
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.brand + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
    //changed output to new values and properties
}
var X = 82;
document.write(X + "<br>");
{
    let X = 33;
    document.write(X + "<br>");// let keyword
}
document.write(X);
