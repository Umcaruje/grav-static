// close out the open navbar in mobile mode when we click outside of it
(function () {
  $('.collapse').on('shown.bs.collapse', function () {
    $(document).on('click', function () {
      $('.collapse').collapse('hide');
    });
  });
}).call(this);
// start tooltips
(function () {
  $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip(); 
  });
 }).call(this);
// prevent clicks in map 
(function () {
  $('.mapa').click( function () {
      $('.mapa iframe').css("pointer-events", "auto");
  });

  $( ".mapa" ).mouseleave( function() {
    $('.mapa iframe').css("pointer-events", "none");
  });
}).call(this);
