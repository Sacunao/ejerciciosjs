function pintar (caracter, veces){
  var resultado ="";
  for (var i = 1; i <= veces; i++){
    resultado += caracter;
  }
  return resultado;
}
var espacio = 0;
var asterisco = 0;

var n = parseInt(prompt("Ingrese un número"));

function piramide(n){
  for (var i = 1; i<=n; i++){
    espacio = n-i;
    asterisco = i;
    document.write(pintar("&nbsp&nbsp", espacio));
    document.write(pintar("*", asterisco));
    document.write("<br>");
   }
}
piramide(n);