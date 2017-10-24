"use strict";

window.onload = function() {

    // hi!
    var theElement = window.document.getElementById("output");
    var value = ()=>{return "Hello World!, And Universe! And Mars!"};
    theElement.innerHTML = value();

}