$( document ).ready(function() {
    console.log("DOM loaded");
    $('h1').addClass('titel');
    $('#naam').after('<p class="hidden" id="popup">Verplicht veld.</p>');


    
      $('#naam').blur(function(){
        $('.hidden').css({'visibility': 'visible'});
      });
      
      $('#naam').focus(function(){
        $('.hidden').css({'visibility': 'hidden'});
      });

      function OnSubmit(event){
        alert( "Handler for .click() called.");
      }
      $('#btn_submit').click(OnSubmit);



    
  });

  