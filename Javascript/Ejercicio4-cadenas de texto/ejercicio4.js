let nombre = 'Melany';
let apellido = 'Sosa';
let estudiante = nombre.concat(' ', apellido);

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let numCadena = estudiante.length;

let firstLetter = nombre.substring(0, 1);

let lastLetter = apellido.substring(apellido.length - 1, apellido.length);

let eliminarEspacios = estudiante.replace(/ /g, '');

let nombreIncluido = estudiante.includes(nombre);
