/**
 * Funciones flecha
 */

const userName = () => {
    let userName = prompt("Ingrese su nombre");
    let p = document.getElementById("message");
    p.textContent="Tu nombre es "+userName;
};
