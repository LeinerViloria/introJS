const limpiar = (cadena) => {
  return cadena.trim();
}

let dia = prompt("Ingrese un dia de la semana");
dia = dia.toLowerCase();
dia = limpiar(dia);

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia == "miércoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("Entre semana");
} else if (dia === "sabado" || dia == "sábado" || dia === "domingo") {
  alert("Fin de semana");
} else {
  alert("No es un dia valido");
}
