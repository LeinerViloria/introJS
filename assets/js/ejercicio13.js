// Local Storage

let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("welcome");

if (localStorage.getItem("nombre")) {
    nombreUsuario.innerHTML = "Bienvenido/a: "+localStorage.getItem("nombre");
}

const cambiarNombre = () => {
    let nombre = prompt("Ingresa tu nombre");
    nombreUsuario.innerHTML = "Bienvenido/a: "+nombre;
    localStorage.setItem("nombre", nombre);
}

/**
 * Los eventos se recomiendan que vayan al final
 */

ejecutar.onclick = () => {
    cambiarNombre();
}