const listaCompra=["pan","leche","huevo","queso","arroz"];
listaCompra.push('Aceite de Girasol');
listaCompra.pop()

const peliculas = [
	{
		titulo: 'volver al futuro',
		director: 'Robert Zemeckis',
		fecha: new Date(1985, 11, 26),
	},
	{
		titulo: 'Cuestion de tiempo',
		director: 'Richard Curtis',
		fecha: new Date(2013, 10, 07),
	},
	{
		titulo: 'Shrek',
		director: 'Andrew Adamson, Vicky Jenson',
		fecha: new Date(2001, 6, 19),
	},
];

const peliculas_enero_2010 = peliculas.filter(
	(pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);
const directores = peliculas.map((pelicula) => {
	return pelicula.director;
});
const titulos = peliculas.map((pelicula) => {
	return pelicula.titulo;
});

const directores_titulos= directores.concat(titulos)

const directores_titulo_propagacion= [...directores, ...titulos]

