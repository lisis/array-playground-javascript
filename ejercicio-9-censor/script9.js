// Implementa en este fichero la solución
// Escribe antes todos los pasos que hay que realizar con lenguaje natural

// Estas palabras prohibidas vienen de la base de datos. Úsa la variable palabrasProhibidas, porque sus valores podrían cambiar en función de las necesidades del censor 

let palabrasProhibidas = ["Bugatti", "yummy", "Booty"];

// console.log("Es hora de censurar!");

// Tengo que recuperar todos los <span> y recorrerlos

let allSpans = document.querySelectorAll("span");

for (let i = 0; i < allSpans.length; i++) {

    let siguienteSpan = allSpans[i].textContent;

    // De momento, voy a cambiar todos los span por *****
    // Tengo que mirar si el span contiene alguna de las palabras prohibidas
    if (palabrasProhibidas.includes(siguienteSpan)) {
        allSpans[i].textContent = "*****";
    }
};