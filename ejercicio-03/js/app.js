var n = parseInt(prompt("Ingrese un número"));
function sucesion (n) {
	for (var i = 0; i <= n; i+=2){
		document.write(i + " ");
	}
}
sucesion(n);