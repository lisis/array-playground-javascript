// Strings. Las posiciones que ocupan 

// Podemos acceder a un carácterdel string mediante la misma notación que los array

let frase = "En esta escuela ya no traen pastas!"
// console.log(frase[0]) // Primer carácter
// console.log(frase[frase.length - 1]) //Último carácter

// la función indexOf es una función especial denominada 'método'; que nos nos indica en que posición se encuentra una cadena de texto

let posicion = frase.indexOf("es")
console.log("Puesto que la palabra 'escuela' empieza en la posición 8 del string; ese es el valor que va a devolver indexOf: ", posicion);

// // indexOf también funciona para los arrays
// let razas_gatos = ['Siamés', 'Egipcio', "Vulgaris", 'Persa'];

// // ¿Qué posición ocupa la raza Vulgaris??
// console.log("Posición de la raza de gato Vulgaris", razas_gatos.indexOf("Vulgaris"));
// let posicionGatoVulgaris = razas_gatos.indexOf("Vulgaris");
// // lo quiero eliminar !!
// razas_gatos.splice(posicionGatoVulgaris, 1);

// console.log(razas_gatos);

