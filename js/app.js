(function(){

  var contador = 1;

  $(document).ready(iniciaFuncion);
  $(document).ready(cuentaCaracteres);

  function iniciaFuncion() {
    $(".btn-publicar").click(publicaTweet);
    $("#textarea1").keyup(cuentaCaracteres);
    $("#textarea1").keyup(verificaInputs);
    $(".tweet-title").keyup(verificaInputs);
  }

  function publicaTweet(){
    var $texto = $(".tweet-edit").val();
    var $titulo = $(".tweet-title").val()
    $("<div></div>").prependTo(".nuevos-tweets").addClass("col s12 m6 nuevo-tweet" + contador);
    $("<div></div>").appendTo(".nuevo-tweet" + contador).addClass("card blue-grey darken-1 nueva-card" + contador);
    $("<div></div>").appendTo(".nueva-card" + contador).addClass("card-content white-text nuevo-content" + contador);
    $("<div></div>").appendTo(".nueva-card" + contador).addClass("card-action eliminar-container" + contador);
    $("<span></span>").appendTo(".eliminar-container" + contador).addClass("btn-x eliminar-btn" + contador).text("Eliminar");
    $("<span></span>").appendTo(".nuevo-content" + contador).text($titulo).addClass("card-title");
    $("<p></p>").appendTo(".nuevo-content" + contador).text($texto);
    borraCampos();
    cuentaCaracteres();
    contador += 1;
  }

  function borraCampos(){
    $(".tweet-edit").val("");
    $(".tweet-title").val("");
  }

  function cuentaCaracteres(){
    var totalCaracteres = 140;
    var contadorCaracteres = totalCaracteres - $("#textarea1").val().length;
    $(".contador-container").text(contadorCaracteres);
  }

  function verificaInputs(){
    if ( $(".tweet-title").val() != "" && $("#textarea1").val() != "" ) {
      $("#btnPublicar").removeClass("disabled");
    }
    else {
      $("#btnPublicar").addClass("disabled")
    }
  }

}());
