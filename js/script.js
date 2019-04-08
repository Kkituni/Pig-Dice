var sum1 = 0;
var sum2 = 0;
var rollNumber1 = 0;
var rollNumber2 = 0;
var rollSum = 0;

function roll (){
  var roll1, roll2
  roll1 = Math.floor(Math.random()*6) +1;

  roll2 = Math.floor(Math.random()*6) +1;
}
function sum1(){
  return rollNumber1 += getRandomIntInclusive (1,6);
  return rollNumber1;
}
function addition1(){
  return sum1 = sum1 + rollNumber1;
}
function sum2(){
  return rollNumber2 += getRandomIntInclusive(1,6);
  return rollNumber2;
}
function addition2(){
  return sum2 = sum2 + rollNumber2;
}

$(document).ready(function(){
  $("#button2a").click(function(){
    $("#outcome2").text(equals);
    $("#outcome2b").text(addition1());
  });
  $("#button3a").click(function(){
    $("button3a").attr("disabled", true);
    $("button")
  });
});
