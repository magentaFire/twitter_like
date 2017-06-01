(function(){

  var contador = 1;

  $(document).ready(iniciaFuncion);

  function iniciaFuncion() {
    $(".btn-publicar").click(publicaTweet);
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
    contador += 1;
  }

  function borraCampos(){
    $(".tweet-edit").val("");
    $(".tweet-title").val("");

  }
}());
