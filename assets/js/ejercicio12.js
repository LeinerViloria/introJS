let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("welcome");

const cambiarNombre = () => {
    let nombre = prompt("Ingresa tu nombre");
    nombreUsuario.innerHTML = "Bienvenido/a: "+nombre;
}

/**
 * Los eventos se recomiendan que vayan al final
 */

ejecutar.onclick = () => {
    cambiarNombre();
}