$( document ).ready(function() {
    console.log("DOM loaded");

    

    var dog_list = JSON.parse(localStorage.getItem('dogs2'));
    if (!Array.isArray(dog_list)) {
      dog_list = []; // Create empty array
    }
    var cat_list = JSON.parse(localStorage.getItem('cats'));
    if (!Array.isArray(cat_list)) {
      cat_list = []; // Create empty array
    };

      if (Array.isArray(dog_list)) {
        for (var i = 0; i < dog_list.length; ++i) {
          var dog = dog_list[i];
          $('#hondenHeader').after(
            '<tr><td><b>' + dog.naam +'</b></td>' +
                '<td>'+ dog.leeftijd + '</td>' +
                '<td>'+ dog.regnr + '</td>' +
                '<td>'+ dog.gereserveerd + '</td></tr>');
        }
      }

      if (Array.isArray(cat_list)) {
        for (var i = 0; i < cat_list.length; ++i) {
          var dog = cat_list[i];
          $('#kattenHeader').after(
            '<tr><td><b>' + dog.naam +'</b></td>' +
                '<td>'+ dog.leeftijd + '</td>' +
                '<td>'+ dog.regnr + '</td>' +
                '<td>'+ dog.gereserveerd + '</td></tr>');
        }
      }




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
        var isNaamCorrect = false;
        var isRegnrCorrect = false; 

        var animal = {
          'naam': $('#naam').val(),
          'leeftijd': $('#leeftijd').val(),
          'regnr': $('#regnr').val(),
          'gereserveerd': $('input[name=gereserveerd]:checked').val(),
          'hondkat': $('input[name=hondkat]:checked').val()
        };

        if(animal.naam.length == 0){
          ShowHidden('popupNaam');
          event.preventDefault();
          
        }else{
          HideHidden('popupNaam');
          isNaamCorrect = true;
        }


       if(animal.regnr < 1000){
          ShowHidden('popupReg');
          event.preventDefault();
        }else{
          HideHidden('popupReg');
          isRegnrCorrect = true;
        }

        if(isNaamCorrect && isRegnrCorrect){

          if(animal.hondkat == "hond"){
            dog_list.push(animal);
            localStorage.setItem('dogs2', JSON.stringify(dog_list));
            $('#hondenHeader').after(
              '<tr><td><b>' + animal.naam +'</b></td>' +
                  '<td>'+ animal.leeftijd + '</td>' +
                  '<td>'+ animal.regnr + '</td>' +
                  '<td>'+ animal.gereserveerd + '</td></tr>');
          }else{
            cat_list.push(animal);
            localStorage.setItem('cats', JSON.stringify(cat_list));
            $('#kattenHeader').after(
              '<tr><td><b>' + animal.naam +'</b></td>' +
                  '<td>'+ animal.leeftijd + '</td>' +
                  '<td>'+ animal.regnr + '</td>' +
                  '<td>'+ animal.gereserveerd + '</td></tr>');
          }
        }else{
          event.preventDefault();
        }

      }
      $('#btn_submit').click(OnSubmit);
  });

  