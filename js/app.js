var contador = 1;

$(document).ready(iniciaFuncion);

function iniciaFuncion() {
  $(".btn-publicar").click(publicaTweet);
}

function publicaTweet(texto){
  // texto = $(".tweet-edit").val()
  // $(".nuevos-tweets").append(texto);
  $("<div></div>").appendTo(".nuevos-tweets").addClass("col s12 m6 nuevo-tweet" + contador);
  $("<div></div>").appendTo(".nuevo-tweet" + contador).addClass("card blue-grey darken-1 nueva-card" + contador);
  $("<div></div>").appendTo(".nueva-card" + contador).addClass("card-content white-text nuevo-content" + contador);
  $("<span></span>").appendTo(".nuevo-content" + contador).text($(".tweet-title").val()).addClass("card-title");;
  $("<p></p>").appendTo(".nuevo-content" + contador).text($(".tweet-edit").val());

  borraCampos();
  contador += 1;
}

function borraCampos(){
  $(".tweet-edit").val("");
  $(".tweet-title").val("");

}
