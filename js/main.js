//alert("existe");
function principal() {
	var lista = document.getElementById("agregar").value;
	var contenedor = document.getElementById("listado");
	var res = document.createElement("p");
    var texto = document.createTextNode("lista");
    contenedor.appendChild(res);
    res.appendChild(texto);
    console.log(lista);
}