$(function(){

    $("#tamanho").on("keypress", function(){
          var tamanho =  $("#tamanho").val();
          $("#conta-tamanho").val("Caracteres "+ tamanho.length);

    });
      $("#tamanho").on("change", function(){
          var tamanho =  $("#tamanho").val();
          $("#conta-tamanho").val("Caracteres "+ tamanho.length);

    });


      $("#valor").on("change", function(){
           $("#resultado").val(calculaPorcentagem());

      });
       $("#porcentagem").on("change", function(){
           $("#resultado").val(calculaPorcentagem());

      });

      function calculaPorcentagem()
      {
         porcentagem =   $("#porcentagem").val();
         porcentagem = porcentagem.replace(',' , '.');
         valor       =   $("#valor").val();
         valor       = valor.replace(',' , '.');
          var valorTotal;

          if (valor > 0 && porcentagem > 0)
            {
                valorTotal = (valor)  * (1 + (porcentagem/100));
            }
            return valorTotal;


      }

});