var n = parseInt(prompt("Ingrese un número"));
function asteriscos(n) { 
	for (var i = 1; i <= n; i++) {
		 for (var p = 1; p <= i; p++) {
		  document.write("*");
		 }
	document.write("<br>");
	}
}
asteriscos(n);