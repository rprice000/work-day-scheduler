$("#currentDay").text(moment().format('dddd MMMM Do YYYY h:mma'));


var textNine = document.querySelector("#textNine")
var buttonNine = document.querySelector("#buttonNine")

var textTen = document.querySelector("#textTen")
var buttonTen = document.querySelector("#buttonTen")

var textEleven = document.querySelector("#textEleven")
var buttonEleven = document.querySelector("#buttonEleven")

var textTwelve = document.querySelector("#textTwelve")
var buttonTwelve = document.querySelector("#buttonTwelve")

var textOne = document.querySelector("#textOne")
var buttonOne = document.querySelector("#buttonOne")

var textTwo = document.querySelector("#textTwo")
var buttonTwo = document.querySelector("#buttonTwo")

var textThree = document.querySelector("#textThree")
var buttonThree = document.querySelector("#buttonThree")


var textFour = document.querySelector("#textFour")
var buttonFour = document.querySelector("#buttonFour")

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





var currentHour = new Date().getHours();

function textAreaColorNine() {
    if (currentHour > 9) {
        $("#textNine").addClass("past");
    } else if (currentHour >= 9 && currentHour < 10) {
       $("#textNine").addClass("present");
    } else if (currentHour < 9) {
       $("#textNine").addClass("future");
    }
}
textAreaColorNine();

function textAreaColorTen() {
   if (currentHour > 10) {
       $("#textTen").addClass("past");
   } else if (currentHour >= 10 && currentHour < 11) {
      $("#textTen").addClass("present");
   } else if (currentHour < 10) {
      $("#textTen").addClass("future");
   }
}
textAreaColorTen();

function textAreaColorEleven() {
   if (currentHour > 11) {
       $("#textEleven").addClass("past");
   } else if (currentHour >= 11 && currentHour < 12) {
      $("#textEleven").addClass("present");
   } else if (currentHour < 11) {
      $("#textEleven").addClass("future");
   }
}
textAreaColorEleven();

function textAreaColorTwelve() {
   if (currentHour > 12) {
       $("#textTwelve").addClass("past");
   } else if (currentHour >= 12 && currentHour < 13) {
      $("#textTwelve").addClass("present");
   } else if (currentHour < 12) {
      $("#textTwelve").addClass("future");
   }
}
textAreaColorTwelve();

function textAreaColorOne() {
   if (currentHour > 13) {
       $("#textOne").addClass("past");
   } else if (currentHour >= 13 && currentHour < 14) {
      $("#textOne").addClass("present");
   } else if (currentHour < 13) {
      $("#textOne").addClass("future");
   }
}
textAreaColorOne();

function textAreaColorTwo() {
   if (currentHour > 14) {
       $("#textTwo").addClass("past");
   } else if (currentHour >= 14 && currentHour < 15) {
      $("#textTwo").addClass("present");
   } else if (currentHour < 14) {
      $("#textTwo").addClass("future");
   }
}
textAreaColorTwo();

function textAreaColorThree() {
   if (currentHour > 15) {
       $("#textThree").addClass("past");
   } else if (currentHour >= 15 && currentHour < 16) {
      $("#textThree").addClass("present");
   } else if (currentHour < 15) {
      $("#textThree").addClass("future");
   }
}
textAreaColorThree();

function textAreaColorFour() {
   if (currentHour > 16) {
       $("#textFour").addClass("past");
   } else if (currentHour >= 16 && currentHour < 17) {
      $("#textFour").addClass("present");
   } else if (currentHour < 16) {
      $("#textFour").addClass("future");
   }
}
textAreaColorFour();

function textAreaColorFive() {
   if (currentHour > 17) {
       $("#textFive").addClass("past");
   } else if (currentHour >= 17 && currentHour < 18) {
      $("#textFive").addClass("present");
   } else if (currentHour < 17) {
      $("#textFive").addClass("future");
   }
}
textAreaColorFive();


 






