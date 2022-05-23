// Ejemplo 1: Default parameters
// Ahorra mas memoria

// let estudiante = function(nombre = 'nombre', nota = 0){
//     return 'Hola ' + nombre + ' la nota de su curso es: ' + nota
// }
// console.log(estudiante('Fer', 100));

//----------------------------------------------------------------------------

//Ejemplo 2: Rest parameters
//Permiten representar un número indefinido de argumentos como un array.
//Se representa con ... y el nombre que le quiero dar al array

// function nombreCompleto(nombre, apellidos, ...segundoNombre){
//     console.log(nombre,segundoNombre, apellidos);
//     //console.log(nombre,segundoNombre.join(' '), apellidos);
// }
// nombreCompleto("Maria","Barquero Vargas","Fernanda","Juana","Ana");

//----------------------------------------------------------------------------

//Ejemplo 3: Intl.NumberFormat
//

// let numero = 123456.78;
// console.log(new Intl.NumberFormat('de-DE', {style: 'currency',
// currency:'EUR', useGrouping:true}).format(numero));
