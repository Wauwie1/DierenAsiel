$( document ).ready(function() {
    console.log("DOM loaded");
    $('h1').addClass('titel');
    $('#naam').after('<p class="hidden" id="popup">Verplicht veld.</p>');


    $('.knop').click(function(){
        alert( "Handler for .click() called.");
      });
      
      $('#naam').focusout(function(){
        $('.hidden').css({'visibility': 'visible'});
      });
      
      $('#naam').focusin(function(){
        $('.hidden').css({'visibility': 'hidden'});
      });
    
  });

  