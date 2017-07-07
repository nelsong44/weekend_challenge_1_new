//can't figure out how to start at index 0 after SHOUT! fades out from circle

console.log(peopleArray);

// globals
var i = 0;
var order = 1;

$(document).ready(function() {
  console.log('JQ linked');
  $('.shoutout').append('<div class="shoutoutHeader">SHOUT!</div>');
  //fade in display on page load
  fadeDisplay();
  // $('.shoutout').empty();
  // $('.shoutout').append('<p>"' + peopleArray[i].shoutout + '"</p>' +
  //   '<p>' + peopleArray[i].name + '</p>' +
  //   '<p>' + order + '/21</p>');
  //function to start timer on page load, call nextPerson() every 10 seconds
  var timer = 0;
  setInterval(function() {
    timer++;
    if (timer === 3) {
      timer = 0;
      nextPerson();
    }
  }, 1000); //end setInterval

  //on click of 'Next' call nextPerson(), reset timer
  $('#next').on('click', function() {
    timer = 0;
    setInterval(timer);
    nextPerson();
  });

  //on click of 'Previous' call previousPerson(), reset timer
  $('#previous').on('click', function() {
    timer = 0;
    setInterval(timer);
    previousPerson();
  });
}); // end onReady

// on button click, display next person object on DOM from peopleArray
function nextPerson() {
  i += 1;
  order += 1;
  if (i == peopleArray.length) {
    i = 0;
    order = 1;
  }
  displayOnDom();
} // end nextPerson

// on button click, display previous person object on DOM from peopleArray
function previousPerson() {
  i -= 1;
  order -= 1;
  if (i < 0) {
    i = peopleArray.length - 1;
    order = peopleArray.length;
  }
  displayOnDom();
} // end previousPerson

function displayOnDom() {
  $('.shoutout').empty();
  $('.shoutout').append('<div class="shoutout">' + peopleArray[i].shoutout + '</div>' +
    '<div class="shoutout">' + peopleArray[i].name + '</div>' +
    '<div class="shoutout">' + order + '/21</div>');
  timer = 0;
  fadeDisplay();
} //end displayOnDom

//function to fade text on DOM in and out on button click
function fadeDisplay(e, complete) {
  $('.display').css('display', 'none');
  $('.display').fadeToggle('slow');
} //end fadeDisplay
