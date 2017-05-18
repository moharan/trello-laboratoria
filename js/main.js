//alert("existe");
function over() {
    var elemento = document.getElementById("crear");
    elemento.setAttribute("class", "crearOver");
    //console.log(elemento);
}

function out() {
    var elemento = document.getElementById("crear");
    elemento.setAttribute("class", "crear");
    //console.log(elemento);
}

var lista = function() {
    //alert("existe");
    var estructura = document.getElementById("estructura")
    var contenedor = document.createElement("div");
    contenedor.setAttribute("class", "contenedor");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "agregar");
    input.setAttribute("value", "Añadir una lista...");
    input.setAttribute("class", "agregar");
    input.setAttribute("id", "agregar");
    var listado = document.createElement("div");
    listado.setAttribute("id", "listado");
    var boton = document.createElement("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("name", "botonagregar");
    boton.setAttribute("value", "Guardar");
    boton.setAttribute("class", "botonagregar");
    boton.setAttribute("id", "botonagregar");
    boton.setAttribute("onclick", "listado");
    estructura.appendChild(contenedor);
    contenedor.appendChild(input);
    contenedor.appendChild(listado);
    contenedor.appendChild(boton);
    var listado = function() {
        alert("existe");
        var valor = document.getElementById("guardar").value;
        var res = document.createElement("p");
        var texto = document.createTextNode(valor);
        listado.appendChild(res);
        res.appendChild(texto);
        console.log(valor);
        console.log(texto);
    };

};

function principal() {
    var funcion_01 = document.getElementById("crear");
    funcion_01.addEventListener("click", lista);
};

/*function secundaria() {
	var funcion_02 = document.getElementById("botonagregar");
    funcion_02.addEventListener("click", listado);
}*/

principal();
/*secundaria();*/

/*function principal() {
	var lista = document.getElementById("agregar").value;
	var contenedor = document.getElementById("listado");
	var res = document.createElement("p");
    var texto = document.createTextNode(lista);
    contenedor.appendChild(res);
    res.appendChild(texto);
    console.log(lista);
}*/