$( document ).ready(function() {
    console.log("DOM loaded");

  








    $('h1').addClass('titel');
    $('#naam').after('<p class="hidden" id="popupNaam">Verplicht veld.</p>');
    $('#regnr').after('<p class="hidden" id="popupReg">Incorrect registratienummer.</p>');


      //Dispaly hidden functions
      function HideHidden(id){
        $('#' + id).addClass('hidden');
      }
      function ShowHidden(id){
        $('#' + id).removeClass('hidden');
      }

      //Submit button click
      function OnSubmit(event){
        var animal = {
          'naam': $('#naam').val(),
          'leeftijd': $('#leeftijd').val(),
          'regnr': $('#regnr').val(),
          'gereserveerd': $('input[name=gereserveerd]:checked').val(),
          'hondkat': $('input[name=hondkat]:checked').val()
        };

        if(animal.naam.length == 0){
          ShowHidden('popupNaam');
        }else{
          HideHidden('popupNaam');
        }

       if(animal.regnr < 1000){
          ShowHidden('popupReg');
        }else{
          HideHidden('popupReg');
        }

      }
      $('#btn_submit').click(OnSubmit);



    
  });

  