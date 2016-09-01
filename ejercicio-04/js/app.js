var n = parseInt(prompt("Ingrese un número"));
function sucesion (n) {
	for (var i = 1; i <= n; i+=2){
		document.write(i + " ");
	}
}
sucesion(n);