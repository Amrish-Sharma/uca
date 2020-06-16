// getting values



//generating all the functions to calculate the respective conversion

function c2f() {
    var v = document.getElementById("txt_data").value;
    f = v * 1.8 + 32;
    console.log(v);
    console.log(f);
    document.getElementById("txt_cnvrt").innerHTML = "Converted value from Celcius to Fahrenheit is "+parseFloat(f).toFixed(2)+"F";

}
function f2c() {
    var v = document.getElementById("txt_data").value;
    c = (v-32)/1.8;
    console.log(v);
    console.log(c);
    document.getElementById("txt_cnvrt").innerHTML = "Converted value from Fahrenheit to Celcius is " + parseFloat(c).toFixed(2) +"°C";

}
function f2m() {
    var v = document.getElementById("txt_data").value;
    m = v/3.28;
    console.log(v);
    console.log(m);
    document.getElementById("txt_cnvrt").innerHTML = "Converted value from Feet to Meter is " + parseFloat(m).toFixed(2)+"m";

}
function m2f() {
    var v = document.getElementById("txt_data").value;
    f = v * 3.28;
    console.log(v);
    console.log(f);
    document.getElementById("txt_cnvrt").innerHTML = "Converted value from Meter to Feet is " + parseFloat(f).toFixed(2)+"ft";

}
function i2c() {
    var v = document.getElementById("txt_data").value;
    c = v * 2.54;
    console.log(v);
    console.log(c);
    document.getElementById("txt_cnvrt").innerHTML = "Converted value from Inches to Centimeter is " + parseFloat(c).toFixed(2)+"cm";

}
function c2i() {
    var v = document.getElementById("txt_data").value;
    i = c / 2.54;
    console.log(v);
    console.log(i);
    document.getElementById("txt_cnvrt").innerHTML = "Converted value from Centimeter to Inches is " + parseFloat(i).toFixed(2)+"in";

}
function p2k() {
    var v = document.getElementById("txt_data").value;
    k = v / 2.205;
    console.log(v);
    console.log(k);
    document.getElementById("txt_cnvrt").innerHTML = "Converted value from Pound to Kilogram is " + parseFloat(k).toFixed(2)+"Kg";

}
function k2p() {
    var v = document.getElementById("txt_data").value;
    p = v * 2.205;
    console.log(v);
    console.log(p);
    document.getElementById("txt_cnvrt").innerHTML = "Converted value from Kilogram to Pound is " + parseFloat(p).toFixed(2)+"lb";

}
function reset() {
    //resetting value
    document.getElementById("txt_cnvrt").innerHTML = "";
    document.getElementById("txt_data").value = "";
    document.getElementById("txt_data").focus();

}