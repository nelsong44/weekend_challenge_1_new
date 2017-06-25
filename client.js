console.log(peopleArray);
 $(document).ready(function() {
   console.log('JQ linked');

   //on page load, display first person and their shoutout from peopleArray
   $('.antares').append('<p>' +  peopleArray[0].name + '</p>' +
   '</p>' + peopleArray[0].shoutout + '</p>' +
   '<p>1/21</p>');

   //on click of 'Next' call nextPerson()
   $('#next').on('click', nextPerson);
   //on click of 'Previous' call previousPerson()
   $('#previous').on('click', previousPerson);
 });

var i = 0;
var order = 1;
function nextPerson() {
  i += 1;
  order += 1;
  if(i == peopleArray.length) {
    i = 0;
    order = 1;
  }
  $('.antares').html('<p>' +  peopleArray[i].name + '</p>' +
  '</p>' + peopleArray[i].shoutout + '</p>' +
  '<p>' + (order) + '/21</p>');
  console.log(i);
  console.log(order);
}// end nextPerson

function previousPerson() {
  i -= 1;
  order -= 1;
  if(i < 0) {
    i = peopleArray.length-1;
    order = peopleArray.length;
    $('.antares').html('<p>' +  peopleArray[i].name + '</p>' +
    '</p>' + peopleArray[i].shoutout + '</p>' +
    '<p>' + (order) + '/21</p>');
  }
  else {
  $('.antares').html('<p>' +  peopleArray[i].name + '</p>' +
  '</p>' + peopleArray[i].shoutout + '</p>' +
  '<p>' + (order) + '/21</p>');
  }
  console.log(i);
  console.log(order);

}// end previousPerson
