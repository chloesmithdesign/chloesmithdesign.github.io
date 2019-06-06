$( document ).ready(function() {
    
$('.nav-contents').click(function() {
  $('.contents').addClass('left');
});

$('.close').click(function() {
  $('.contents').removeClass('left');
});


 $('.imagecontainer').mouseenter(function() {
     $(this).find('.caption').addClass('showcaption');
     $(this).find('img').addClass('hideimage');
  });

$('.imagecontainer').mouseleave(function() {
    $(this).find('.caption').removeClass('showcaption');
    $(this).find('img').removeClass('hideimage');
  });





















});