//variable declaration and initialization

var GuestScore=0;
var homeScore=0;



var homeScoreValue = document.getElementById("homeScore");
var GuestScoreValue = document.getElementById("GuestScore");




//function if the score increased by one
var scoreOne = (team) => {
  if (team == "groupOne") {
    homeScore++;
    homeScoreValue.textContent = homeScore;
  } else if (team == "groupTwo") {
    GuestScore++;
    GuestScoreValue.textContent = GuestScore;
  }
}



//function if the score increased by two
var scoreTwo = (team) => {

  if (team == "groupOne") {

    homeScore=homeScore+2;
    homeScoreValue.textContent = homeScore;
  } else if (team == "groupTwo") {
    GuestScore=GuestScore+2;
    GuestScoreValue.textContent = GuestScore;
  }
}


//function if the score increased by three
var scoreThree = (team) => {

  if (team == "groupOne") {

   homeScore = homeScore + 3;
    homeScoreValue.textContent = homeScore;
  } else if (team == "groupTwo") {

    GuestScore = GuestScore + 3;
    GuestScoreValue.textContent = GuestScore;
  }
}