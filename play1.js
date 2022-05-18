/**
 * Los Array, Arreglos, Vectores; juegan un papel clave en el desarrollo software https://www.w3schools.com/js/js_arrays.asp
 * 
 * Permiten agrupar un conjunto de valores en una variable
 */

// un array con 4 razas de gatos
// let razas_gatos = ['Siamés', 'Egipcio', "Vulgaris", 'Persa']
// console.log(razas_gatos)

// // Podemos acceder a la posición de un array mediante la notación nombreArray[posición]
// // ES importante resaltar que los array, en JavaScript y en la mayoria de los lenguajes de programación, empiezan el la posición 0


// //Va a evaluarse como 'Siamés'
// console.log(razas_gatos[1])

// // //Esto se evalua como 'Persa'
// // console.log(razas_gatos[3])

// // // Podemos saber el tamaño de un Array con la propiedad .length
//  console.log("Tamaño del array: " + razas_gatos.length)

// // // Atención! Los Array pueden contener diferentes tipos de datos.
// // // Imagina un array de 4 posiciones que contiene:
// // // Nombre de la persona, país de origen, edad, está casado o no
//  let info_humano = ["Max", "USA", 33, false]

// // Incluso, un array puede contener..otros arrays!
// un array que tiene dos elementos
// la primera posición es OTRO array que tiene 3 elementos
// La segunda posición es OTRO array que tiene 3 elementos
// let matriz = [[1, 2, 3], [4, 5, 6]];
// console.log(matriz);
// console.log(matriz[0]) // Primer elemento del array 'matriz'
// console.log(matriz[0][1]) // Segundo elemento del primer elemento del array ¡matriz'

// En la BBDD de Progats para cada gato guardo su nombre, edad
let bbdd_progats = [["Bigotes", 10], ["Mimosón", 2], ["Loki", 3]];

// Quiero acceder a la información del último gato, a TODA ELLA, su nombre y edad
// console.log(bbdd_progats[2][0]);
// console.log(bbdd_progats[2][1]);

let nombreGato = bbdd_progats[2][0];
console.log(nombreGato);





