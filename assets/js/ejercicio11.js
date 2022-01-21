
let ejecutar = document.getElementById("btnEjecutar");

const cambiarNombre = () => {
    let nombre = prompt("Ingresa tu nombre");
    alert("Tu nombre es: "+nombre);
}

/**
 * Los eventos se recomiendan que vayan al final
 */

ejecutar.onclick = () => {
    cambiarNombre();
}