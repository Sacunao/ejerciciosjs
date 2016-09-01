function primos(num){
   var cont=0;
   for(var i=2; i<=num; i++){
       if(num%i == 0){
          cont++;
       }
   }
   if(cont==1){
    console.log(num);
   }
}
var limit = parseInt(prompt("Escribe un número"));
for (var i=2; i<=limit; i++){
  primos(i);
}


