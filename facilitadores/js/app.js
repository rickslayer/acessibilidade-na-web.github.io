$(function(){

    $("#tamanho").on("keypress", function(){
          var tamanho =  $("#tamanho").val();

$("#conta-tamanho").text("Caracteres "+ tamanho.length);

    });

});