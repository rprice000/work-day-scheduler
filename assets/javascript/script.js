/* Moment.js format for displaying 'Day of Week' 'Month' 'Day' 'Year' 'Time: in Hour and Minutes with AM or PM' */
$("#currentDay").text(moment().format('dddd MMMM Do YYYY h:mma'));

// SETTING VARIABLES FOR ALL FUNCTIONS START

/* Sets variables for TimeBlock Nine textarea and button */
var textNine = document.querySelector("#textNine")
var buttonNine = document.querySelector("#buttonNine")

/* Sets variables for TimeBlock Ten textarea and button */
var textTen = document.querySelector("#textTen")
var buttonTen = document.querySelector("#buttonTen")

/* Sets variables for TimeBlock Eleven textarea and button */
var textEleven = document.querySelector("#textEleven")
var buttonEleven = document.querySelector("#buttonEleven")

/* Sets variables for TimeBlock Twleve textarea and button */
var textTwelve = document.querySelector("#textTwelve")
var buttonTwelve = document.querySelector("#buttonTwelve")

/* Sets variables for TimeBlock One textarea and button */
var textOne = document.querySelector("#textOne")
var buttonOne = document.querySelector("#buttonOne")

/* Sets variables for TimeBlock Two textarea and button */
var textTwo = document.querySelector("#textTwo")
var buttonTwo = document.querySelector("#buttonTwo")

/* Sets variables for TimeBlock Three textarea and button */
var textThree = document.querySelector("#textThree")
var buttonThree = document.querySelector("#buttonThree")

/* Sets variables for TimeBlock Four textarea and button */
var textFour = document.querySelector("#textFour")
var buttonFour = document.querySelector("#buttonFour")

/* Sets variables for TimeBlock Five textarea and button */
var textFive = document.querySelector("#textFive")
var buttonFive = document.querySelector("#buttonFive")

// SETTING VARIABLES FOR ALL FUNCTIONS END

// FUNCTIONS FOR SAVING DATA TO LOCAL STORAGE START

/* Function for saving Key / Value Pairs for TimeBlock Nine */
function saveNine() {
     $("#buttonNine");
     localStorage.setItem("taskNine", textNine.value);
     document.getElementById('timeBlockNineUpdate').style.display = 'block';
     setInterval(function(){
        document.getElementById('timeBlockNineUpdate').style.display = 'none';
     },3000);
 }
 buttonNine.addEventListener('click', saveNine);
 textNine.value = localStorage.getItem("taskNine")
 

/* Function for saving Key / Value Pairs for TimeBlock Ten */
function saveTen() {
    $("#buttonTen");
    localStorage.setItem("taskTen", textTen.value);
    document.getElementById('timeBlockTenUpdate').style.display = 'block';
    setInterval(function(){
        document.getElementById('timeBlockTenUpdate').style.display = 'none';
    },3000);
}
buttonTen.addEventListener('click', saveTen);
textTen.value = localStorage.getItem("taskTen")

/* Function for saving Key / Value Pairs for TimeBlock Eleven */
function saveEleven() {
    $("#buttonEleven");
    localStorage.setItem("taskEleven", textEleven.value);
    document.getElementById('timeBlockElevenUpdate').style.display = 'block';
    setInterval(function(){
        document.getElementById('timeBlockElevenUpdate').style.display = 'none';
    },3000);
}
buttonEleven.addEventListener('click', saveEleven);
textEleven.value = localStorage.getItem("taskEleven")

/* Function for saving Key / Value Pairs for TimeBlock Twelve */
function saveTwelve() {
    $("#buttonTwelve");
    localStorage.setItem("taskTwelve", textTwelve.value);
}
buttonTwelve.addEventListener('click', saveTwelve);
textTwelve.value = localStorage.getItem("taskTwelve")

/* Function for saving Key / Value Pairs for TimeBlock One */
function saveOne() {
    $("#buttonOne");
    localStorage.setItem("taskOne", textOne.value);
}
buttonOne.addEventListener('click', saveOne);
textOne.value = localStorage.getItem("taskOne")

/* Function for saving Key / Value Pairs for TimeBlock Two */
function saveTwo() {
    $("#buttonTwo");
    localStorage.setItem("taskTwo", textTwo.value);
}
buttonTwo.addEventListener('click', saveTwo);
textTwo.value = localStorage.getItem("taskTwo")

/* Function for saving Key / Value Pairs for TimeBlock Three */
function saveThree() {
    $("#buttonThree");
    localStorage.setItem("taskThree", textThree.value);
}
buttonThree.addEventListener('click', saveThree);
textThree.value = localStorage.getItem("taskThree")

/* Function for saving Key / Value Pairs for TimeBlock Four */
function saveFour() {
    $("#buttonNine");
    localStorage.setItem("taskFour", textFour.value);
}
buttonFour.addEventListener('click', saveFour);
textFour.value = localStorage.getItem("taskFour")

/* Function for saving Key / Value Pairs for TimeBlock Five */
function saveFive() {
    $("#buttonFive");
    localStorage.setItem("taskFive", textFive.value);
}
buttonFive.addEventListener('click', saveFive);
textFive.value = localStorage.getItem("taskFive")

// FUNCTIONS FOR SAVING DATA TO LOCAL STORAGE END

// FUNCTIONS FOR CHANGING TEXTAREA BACKGROUND COLOR START

/* Creates variable that holds current hour of the day */
var currentHour = new Date().getHours();

/* Function for chaning textarea background color for TimeBlock Nine */
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

/* Function for chaning textarea background color for TimeBlock Ten */
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

/* Function for chaning textarea background color for TimeBlock Eleven */
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

/* Function for chaning textarea background color for TimeBlock Twelve */
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

/* Function for chaning textarea background color for TimeBlock One */
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

/* Function for chaning textarea background color for TimeBlock Two */
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

/* Function for chaning textarea background color for TimeBlock Three */
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

/* Function for chaning textarea background color for TimeBlock Four */
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

/* Function for chaning textarea background color for TimeBlock Five */
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

// FUNCTIONS FOR CHANGING TEXTAREA BACKGROUND COLOR END



 setTimeout(function(){
    window.location.reload(1);
 }, 600000);







//  function updateEleven() {
//    document.getElementById('timeBlockElevenUpdate').style.display = 'block';
//    setInterval(function(){
//      document.getElementById('timeBlockElevenUpdate').style.display = 'none';
//    },3000);
//  }

 function updateTwelve() {
   document.getElementById('timeBlockTwelveUpdate').style.display = 'block';
   setInterval(function(){
     document.getElementById('timeBlockTwelveUpdate').style.display = 'none';
   },3000);
 }

 function updateOne() {
   document.getElementById('timeBlockOneUpdate').style.display = 'block';
   setInterval(function(){
     document.getElementById('timeBlockOneUpdate').style.display = 'none';
   },3000);
 }

 function updateTwo() {
   document.getElementById('timeBlockTwoUpdate').style.display = 'block';
   setInterval(function(){
     document.getElementById('timeBlockTwoUpdate').style.display = 'none';
   },3000);
 }

 function updateThree() {
   document.getElementById('timeBlockThreeUpdate').style.display = 'block';
   setInterval(function(){
     document.getElementById('timeBlockThreeUpdate').style.display = 'none';
   },3000);
 }

 function updateFour() {
   document.getElementById('timeBlockFourUpdate').style.display = 'block';
   setInterval(function(){
     document.getElementById('timeBlockFourUpdate').style.display = 'none';
   },3000);
 }

 function updateFive() {
   document.getElementById('timeBlockFiveUpdate').style.display = 'block';
   setInterval(function(){
     document.getElementById('timeBlockFiveUpdate').style.display = 'none';
   },3000);
 }