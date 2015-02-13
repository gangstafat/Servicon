$(document).foundation();
$(document).ready(function(){
  $('#myAccordionGroup').on('toggled', function (event, accordion) {
    console.log(accordion);
  });
});