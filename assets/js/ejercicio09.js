let ciudad = prompt("Ingresa tu ciudad");
ciudad = ciudad.toLowerCase();

// switch (ciudad) {
//     case "bogota":
//         alert("Clima frío");
//         break;
//     case "bucaramanga":
//         alert("Clima cálido");
//         break;
//     case "sincelejo":
//         alert("Clima cálido");
//         break;

//     default:
//         alert("Su ciudad no es válida");
//         break;
// }

if(ciudad === "bogota" || ciudad === "pasto"){
    alert("Clima frío");
}else if(ciudad === "armenia" || ciudad === "medellin"){
    alert("Clima templado");
}else{
    alert("La ciudad no es válida");
}