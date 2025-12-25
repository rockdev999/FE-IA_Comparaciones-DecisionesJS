const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let librosLeidos = [];
let option = -1;

const mostrarMenu = () => {
  console.log('\n--- MENU ---');
  console.log('1. Agregar libro');
  console.log('2. Mostrar libros leidos');
  console.log('0. Salir');
};

const agregarLibro = () => {
  rl.question('Ingrese el nombre del libro: ', (titulo) => {
    librosLeidos.push(titulo);
    console.log('Libro agregado.');
    iniciarMenu();
  });
};

const mostrarLibrosLeidos = () => {
  if (librosLeidos.length === 0) {
    console.log('No hay libros registrados.');
  } else {
    console.log('\nLibros leídos:');
    librosLeidos.forEach((libro, index) => {
      console.log(`${index + 1}. ${libro}`);
    });
  }
  iniciarMenu();
};

const iniciarMenu = () => {
  mostrarMenu();

  rl.question('Seleccione una opción: ', (respuesta) => {
    option = parseInt(respuesta);

    switch (option) {
      case 1:
        agregarLibro();
        break;
      case 2:
        mostrarLibrosLeidos();
        break;
      case 0:
        rl.close();
        break;
      default:
        console.log('opcion incorrecta');
        iniciarMenu();
        break;
    }
  });
};

iniciarMenu();
