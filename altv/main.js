$( document ).ready(function() {


    for (var i = 0; i < 36; i++) {
      var sorgenteCodice = $("#boxtemplate").html();
      console.log(sorgenteCodice);

      var template = Handlebars.compile(sorgenteCodice);

      var daInserire = { classeAggiunta:"box"};

      var html = template(daInserire);

      $(".griglia").append(html);
    }


     var source = "https://flynn.boolean.careers/exercises/api/random/int";


     $(".box").one("click",
       function(){
         var questo = $(this);
         $.ajax(
            {
               url : source,
               method: "GET",
               success: function(data){
                  var numeroRandom = data.response;
                  console.log(numeroRandom);

                  if (numeroRandom >  5) {
                    questo.css("background-color","green");
                    questo.find("p").text(numeroRandom);
                  }
                  else {
                    questo.css("background-color","yellow");
                    questo.find("p").text(numeroRandom);
                  }

               },
               error: function(richiesta,stato,errore){
                  console.log("c'è un problema con il server",richiesta,stato,errore);
               }
            }
         );
       }
     )


});
