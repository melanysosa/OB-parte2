const btn = document.querySelector('.btn-prueba');

btn.addEventListener('click', () => alert('click en el botón'));

$('.btn-prueba').click(() => {
	console.log('Hola, estoy utilizando jQuery');
});