function full_Sentence() {//concatenate a full sentence using concatenate method
    var part_1 = "I am ";
    var part_2 = "showing off my skills ";
    var part_3 = "by making this a ";
    var part_4 = "complete sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method() {//slice method
    var Sentence = "All work and no play makes Cassie a dull girl.";
    var Section = Sentence.slice(27,33);//value of element position
    document.getElementById("Slice").innerHTML = Section;
}
var text1 = "Hello, World!";
var text2 = text1.toUpperCase();//made the string uppercase
document.write(text2 + "<br>");
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");//located position of the word locate starts
document.write(str + "<br>");
document.write(pos + "<br>");
function string_Method() {//convert numbers to string
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method() {
    var X = 12938.3012987376112;//round to precise number at position
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
var num = 5.56789;
var n = num.toFixed(2);//rounded to fixed position
document.write(num + "<br>" + n + "<br>");
function func_valueOf() {
    var str = "Hello World";
    var res = str.valueOf();//primitive value of the string object
    document.getElementById("Value").innerHTML = res;
}
