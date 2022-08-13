const nombre = "Melany";
const apellido = "Sosa";
const estudiante = nombre.concat(" ", apellido);

const estudianteMayus = estudiante.toUpperCase();

const estudianteMinus = estudiante.toLowerCase();

const numCadena = estudiante.length;

const firstconstter = nombre.substring(0, 1);

const lastLetter = apellido.substring(apellido.length - 1, apellido.length);

const eliminarEspacios = estudiante.replace(/ /g, "");

const nombreIncluido = estudiante.includes(nombre);

console.log (estudianteMayus,estudianteMinus,numCadena,firstconstter,lastLetter,eliminarEspacios,nombreIncluido);