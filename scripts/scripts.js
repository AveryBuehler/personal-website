new TypeIt('#whoami', {
    speed: 100,
    deleteSpeed: 50,
    autoStart: true
  })
  .pause(200)
  .type("I'm a student")
  .pause(400)
  .delete(7)
  .type("developer from Connecticut.");

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

//trivia

setTriviaDates();

function setTriviaDates() {
  var actualD = new Date();
  var ranD1 = new Date(2018, Math.floor(Math.random() * 12), Math.floor(Math.random() * 29));
  var ranD2 = new Date(2018, Math.floor(Math.random() * 12), Math.floor(Math.random() * 29));
  var ranD3 = new Date(2018, Math.floor(Math.random() * 12), Math.floor(Math.random() * 29));
  document.getElementById("date4").innerHTML = dateNtoS(actualD) + " " + actualD.getDate() + "<sup>" + dateSup(actualD) + "</sup>";
  document.getElementById("date3").innerHTML = dateNtoS(ranD3) + " " + ranD3.getDate() + "<sup>" + dateSup(ranD3) + "</sup>";
  document.getElementById("date2").innerHTML = dateNtoS(ranD2) + " " + ranD2.getDate() + "<sup>" + dateSup(ranD2) + "</sup>";
  document.getElementById("date1").innerHTML = dateNtoS(ranD1) + " " + ranD1.getDate() + "<sup>" + dateSup(ranD1) + "</sup>";
}

function dateNtoS(date) {
  var day;
  switch (date.getMonth()) {
    case 0:
      day = "January";
      break;

    case 1:
      day = "February";
      break;

    case 2:
      day = "March";
      break;

    case 3:
      day = "April";
      break;

    case 4:
      day = "May";
      break;

    case 5:
      day = "June";
      break;

    case 6:
      day = "July";
      break;

    case 7:
      day = "August";
      break;

    case 8:
      day = "September";
      break;

    case 9:
      day = "October";
      break;

    case 10:
      day = "November";
      break;

    case 11:
      day = "December";
  }
  return day;
}

function dateSup(date) {
  var ordinal;
  if (date.getDate() == 1 || date.getDate() == 21 || date.getDate() == 31) {
    ordinal = "st";
  } else if (date.getDate() == 2 || date.getDate() == 22) {
    ordinal = "nd";
  } else if (date.getDate() == 3 || date.getDate() == 23) {
    ordinal = "rd";
  } else {
    ordinal = "th";
  }
  return ordinal;
}

trivia();

function trivia() {
  var correct = 0;
  var checked = 0;
  var length = document.getElementById("trivia-form").length - 2;
  var form = document.getElementById("trivia-form");
  console.log(length);
  for (var i = 0; i < length; i++) {
    if (form[i].value == 'correct' && form[i].checked) {
      correct++;
    }
    if (form[i].checked) {
      checked++;
    }
  }
  if (checked == 11) {
    document.getElementById('trivia-results').style.display = "block";

    switch (correct) {
      case 0:
        document.getElementById('trivia-results').innerHTML = "You got absolutely <span style='color: #fe4a49;'>none</span> correct. Yikes.";
        break;
      case 1:
        document.getElementById('trivia-results').innerHTML = "You only got <span style='color: #fe4a49;'>1</span> correct.<br> Try again!";
        break;
      case 2:
        document.getElementById('trivia-results').innerHTML = "You only got <span style='color: #fe4a49;'>2</span> correct.<br> Try again!";
        break;
      case 3:
        document.getElementById('trivia-results').innerHTML = "You only got <span style='color: #fe4a49;'>3</span> correct.<br> Try again!";
        break;
      case 4:
        document.getElementById('trivia-results').innerHTML = "You only got <span style='color: #fe4a49;'>4</span> correct.<br> Try again!";
        break;
      case 5:
        document.getElementById('trivia-results').innerHTML = "You got <span style='color: #fe4a49;'>5</span> correct, not too bad.<br> Try again!";
        break;
      case 6:
        document.getElementById('trivia-results').innerHTML = "You got <span style='color: #fe4a49;'>6</span> correct, not too bad.<br> Try again!";
        break;
      case 7:
        document.getElementById('trivia-results').innerHTML = "Close! You got <span style='color: #fe4a49;'>7</span> correct.<br> Try again!";
        document.getElementById('confetti-holder').style.display = "block";
        break;
      case 8:
        document.getElementById('trivia-results').innerHTML = "Close! You got <span style='color: #fe4a49;'>8</span> correct.<br> Try again!";
        document.getElementById('confetti-holder').style.display = "block";
        break;
      case 9:
        document.getElementById('trivia-results').innerHTML = "Close! You got <span style='color: #fe4a49;'>9</span> correct.<br> Try again!";
        document.getElementById('confetti-holder').style.display = "block";
        break;
      case 10:
        document.getElementById('trivia-results').innerHTML = "Do I know you? You got <span style='color: #fe4a49;'>10</span> correct!";
        document.getElementById('confetti-holder').style.display = "block";
        break;
      case 11:
        document.getElementById('trivia-results').innerHTML = "You must've cheated! You got all <span style='color: #fe4a49;'>11</span> correct!";
        document.getElementById('confetti-holder').style.display = "block";
        break;
    }
    console.log(correct);
    document.getElementById('submit-trivia').style.display = "none";
    document.getElementById('reset-trivia').style.display = "inline-block";
  }
  console.log("Trivia Running");
}

function resetTrivia() {
  document.getElementById('trivia-results').style.display = "none";
  document.getElementById("trivia-form").reset();
  document.getElementById('submit-trivia').style.display = "inline-block";
  document.getElementById('reset-trivia').style.display = "none";
  document.getElementById('confetti-holder').style.display = "none";
}

workingTime();

function workingTime() {
  let now = new Date();
  let start = new Date(2018, 8, 10);
  document.getElementById('workingTime').innerHTML = "(" + Math.ceil((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30.417)) + " months)";
}