const datos_personales = {
	nombre: 'Melany',
	apellido: 'Sosa',
	edad: 26,
	altura: 154,
	desarrolador: true,
};
const edad = datos_personales.edad;

const lista_datos = [
	{ ...datos_personales },
	{
		nombre: 'Belen',
		apellido: 'Viglietti',
		edad: 25,
		altura: 160,
		desarrolador: false,
	},
	{
		nombre: 'Enrique',
		apellido: 'Tejerina',
		edad: 29,
		altura: 178,
		desarrolador: false,
	},
];

const edad_mayor_a_menor = lista_datos.sort((a, b) => a.edad - b.edad);

console.log(edad_mayor_a_menor);
