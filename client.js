console.log(peopleArray);
 $(document).ready(function() {
   console.log('JQ linked');
   //on page load, display first person and their shoutout from peopleArray
   $('.name').append(peopleArray[0].name);
   $('.index').append('1/21');
   $('.shoutout').append(peopleArray[0].shoutout);
   //fade in display on page load
   fadeDisplay();
   //function to start timer on page load, call nextPerson() every 10 seconds
   var timer = 0;
   setInterval(function() {
    timer++;
    if (timer === 10) {
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

// globals
var i = 0;
var order = 1;

// on button click, display next person object on DOM from peopleArray
function nextPerson() {
  i += 1;
  order += 1;
  if(i == peopleArray.length) {
    i = 0;
    order = 1;
  }
  displayOnDom();
}// end nextPerson

// on button click, display previous person object on DOM from peopleArray
function previousPerson() {
  i -= 1;
  order -= 1;
  if(i < 0) {
    i = peopleArray.length-1;
    order = peopleArray.length;
  }
  displayOnDom();
}// end previousPerson

function displayOnDom() {
  $('.name').text(peopleArray[i].name);
  $('.index').text(order + '/21');
  $('.shoutout').text(peopleArray[i].shoutout);
  timer = 0;
  fadeDisplay();
}//end displayOnDom

//function to fade text on DOM in and out on button click
function fadeDisplay(e, complete) {
  // $('.display').css('display', 'none');
  $('.display').fadeToggle('slow');
}//end fadeDisplay
