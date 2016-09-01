var n = parseInt(prompt("Ingrese un número"));
function asteriscos(n) { 
	for (var i = n; i >= 1; i--) {
		for (var p = i; p >=1; p--) {
		  document.write("*");
		}
	document.write("<br>");
	}
}
asteriscos(n);