/**
 * Funciones
 */

let name = " Fulano de tal";

function userName() {
    let userName = prompt("Ingrese su nombre");
    let p = document.getElementById("message");
    p.textContent="Tu nombre es "+userName+", y el invitado es "+name;
}