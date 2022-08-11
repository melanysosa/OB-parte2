function True() {
	return true;
}

async function Promesa() {
	return setTimeout(() => console.log('Hola soy una promesa'), 5000);
}

function* pares() {
	let id = 0;
	while (true) {
		yield (id += 2);
	}
}
const generator = pares();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

