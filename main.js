$( document ).ready(function() {


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
