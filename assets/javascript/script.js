$("#currentDay").text(moment().format('dddd MMMM Do YYYY h:mma'));


var timeBlockNine = document.getElementById("#timeBlockNine")
var hourNine = document.getElementById("#hourNine")
var textNine = document.querySelector("#textNine")
var buttonNine = document.querySelector("#buttonNine")

var timeBlockTen = document.getElementById("#timeBlockTen")
var hourTen = document.getElementById("#hourTen")
var textTen = document.querySelector("#textTen")
var buttonTen = document.querySelector("#buttonTen")

var timeBlockEleven = document.getElementById("#timeBlockEleven")
var hourEleven = document.getElementById("#hourEleven")
var textEleven = document.querySelector("#textEleven")
var buttonEleven = document.querySelector("#buttonEleven")

var timeBlockTwelve = document.getElementById("#timeBlockTwelve")
var hourTwelve = document.getElementById("#hourTwelve")
var textTwelve = document.querySelector("#textTwelve")
var buttonTwelve = document.querySelector("#buttonTwelve")

var timeBlockOne = document.getElementById("#timeBlockOne")
var hourOne = document.getElementById("#hourOne")
var textOne = document.querySelector("#textOne")
var buttonOne = document.querySelector("#buttonOne")

var timeBlockTwo = document.getElementById("#timeBlockTwo")
var hourTwo = document.getElementById("#hourTwo")
var textTwo = document.querySelector("#textTwo")
var buttonTwo = document.querySelector("#buttonTwo")

var timeBlockThree = document.getElementById("#timeBlockThree")
var hourThree = document.getElementById("#hourThree")
var textThree = document.querySelector("#textThree")
var buttonThree = document.querySelector("#buttonThree")

var timeBlockFour = document.getElementById("#timeBlockFour")
var hourFour = document.getElementById("#hourFour")
var textFour = document.querySelector("#textFour")
var buttonFour = document.querySelector("#buttonFour")

var timeBlockFive = document.getElementById("#timeBlockFive")
var hourFive = document.getElementById("#hourFive")
var textFive = document.querySelector("#textFive")
var buttonFive = document.querySelector("#buttonFive")


 function saveNine() {
     $("#buttonNine");
     localStorage.setItem("taskNine", textNine.value);
 }
 buttonNine.addEventListener('click', saveNine);
 textNine.value = localStorage.getItem("taskNine")









 
 function saveTen() {
    $("#buttonTen");
    localStorage.setItem("taskTen", textTen.value);
}
buttonTen.addEventListener('click', saveTen);
textTen.value = localStorage.getItem("taskTen")

function saveEleven() {
    $("#buttonEleven");
    localStorage.setItem("taskEleven", textEleven.value);
}
buttonEleven.addEventListener('click', saveEleven);
textEleven.value = localStorage.getItem("taskEleven")

function saveTwelve() {
    $("#buttonTwelve");
    localStorage.setItem("taskTwelve", textTwelve.value);
}
buttonTwelve.addEventListener('click', saveTwelve);
textTwelve.value = localStorage.getItem("taskTwelve")

function saveOne() {
    $("#buttonOne");
    localStorage.setItem("taskOne", textOne.value);
}
buttonOne.addEventListener('click', saveOne);
textOne.value = localStorage.getItem("taskOne")

function saveTwo() {
    $("#buttonTwo");
    localStorage.setItem("taskTwo", textTwo.value);
}
buttonTwo.addEventListener('click', saveTwo);
textTwo.value = localStorage.getItem("taskTwo")

function saveThree() {
    $("#buttonThree");
    localStorage.setItem("taskThree", textThree.value);
}
buttonThree.addEventListener('click', saveThree);
textThree.value = localStorage.getItem("taskThree")

function saveFour() {
    $("#buttonNine");
    localStorage.setItem("taskFour", textFour.value);
}
buttonFour.addEventListener('click', saveFour);
textFour.value = localStorage.getItem("taskFour")

function saveFive() {
    $("#buttonFive");
    localStorage.setItem("taskFive", textFive.value);
}
buttonFive.addEventListener('click', saveFive);
textFive.value = localStorage.getItem("taskFive")


 






