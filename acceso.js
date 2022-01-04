var dato = prompt("Bienvenido, ingrese su usuario ");

if (dato === "Homero") {
    var pass = prompt("Ingrese su contraseña");
    if (pass === "12345") {
        alert("Bienvenido a su Birrería");
    } else {
        alert("Contraseña incorrecta");
    }
} else {
    console.log("Usuario Incorrecto");
    alert("Usuario incorrecto")

}


agregar.addEventListener("click", () => {
    console.log('Click en el boton agregar');

    let entrada = texto.value;
    console.log(entrada);



    let item = document.createElement('li');

    item.innerText = entrada
    lista.appendChild(item);

});

enviar.addEventListener("click", () => {
    console.log("Enviaste tu receta");
    alert("Tu receta fue enviada");
})
