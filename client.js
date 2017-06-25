console.log(peopleArray);
 $(document).ready(function() {
   console.log('JQ linked');
   //on page load, display first person and their shoutout from peopleArray
   $('.name').append(peopleArray[0].name);
   $('.index').append('1/21');
   $('.shoutout').append(peopleArray[0].shoutout);
   //function to start timer on page load, call nextPerson() every 3 seconds
   var timer = 0;
   setInterval(function() {
    timer++;
    if (timer === 3) {
      timer = 0;
      nextPerson();
    }
  }, 1000);
    //end setInterval()

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
  $('.name').text(peopleArray[i].name);
  $('.index').text(order + '/21');
  $('.shoutout').text(peopleArray[i].shoutout);
  timer = 0;
}// end nextPerson

// on button click, display previous person object on DOM from peopleArray
function previousPerson() {
  i -= 1;
  order -= 1;
  if(i < 0) {
    i = peopleArray.length-1;
    order = peopleArray.length;
  }
  // else {
    $('.name').text(peopleArray[i].name);
    $('.index').text(order + '/21');
    $('.shoutout').text(peopleArray[i].shoutout);
    // }
}// end previousPerson
