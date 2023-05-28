"use strict";

function calcAge() {
    var bDay = document.querySelector('.day').value;
    var bMonth =  document.querySelector('.month').value;
    var bYear = document.querySelector('.year').value;
    
  if (bDay==''){
   document.querySelector('.date-error').innerHTML="this filed is required ";
   document.getElementById("date").classList.add("error");
  }
  else if (bDay>32){
    document.querySelector('.date-error').innerHTML="Must be a valid date";
    document.getElementById("date").classList.add("error");
   }
 if (bMonth==''){
    document.querySelector('.month-error').innerHTML="this filed is required ";
    document.getElementById("month").classList.add("error");
   }
   else if (bMonth>12){
    document.querySelector('.month-error').innerHTML="Must be a valid date";
    document.getElementById("date").classList.add("error");
   }
  if (bYear==''){
    document.querySelector('.year-error').innerHTML="this filed is required ";
    document.getElementById("year").classList.add("error");
   }
  else{
    console.log("else statement");
    document.getElementById("year").classList.remove("error");
    document.getElementById("month").classList.remove("error");
    document.getElementById("date").classList.remove("error");
    document.querySelector('.year-error').innerHTML="";
    document.querySelector('.month-error').innerHTML="";
    document.querySelector('.date-error').innerHTML="";

    var date = new Date();
    var currentDate = date.getDate();
    var currentMonth = 1 + date.getMonth();
    var currentYear = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if(bDay > currentDate){
        currentDate = currentDate + month[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }
    if(bMonth > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }
    var d = currentDate - bDay;
    var m = currentMonth - bMonth;
    var y = currentYear - bYear;
  
    document.querySelector('.dispaly-year').innerHTML = y;
    document.querySelector('.dispaly-month').innerHTML = m;
    document.querySelector('.dispaly-day').innerHTML = d; 
 }
}