const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const app = {
  librosLeidos: [],

  mostrarMenu() {
    console.log('\n--- MENU ---');
    console.log('1. Agregar libro');
    console.log('2. Mostrar libros');
    console.log('0. Salir');
  },

  agregarLibro() {
    rl.question('Titulo del libro: ', (titulo) => {
      rl.question('Autor del libro: ', (autor) => {
        rl.question('Categoria del libro: ', (categoria) => {
          const libro = {
            titulo,
            autor,
            categoria
          };

          this.librosLeidos.push(libro);
          console.log('Libro agregado correctamente.');
          this.iniciar();
        });
      });
    });
  },

  mostrarLibros() {
    if (this.librosLeidos.length === 0) {
      console.log('No hay libros registrados.');
    } else {
      console.log('\nLibros leidos:\n');
      this.librosLeidos.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro.titulo}`);
        console.log(`   Autor: ${libro.autor}`);
        console.log(`   Categoria: ${libro.categoria}`);
        console.log('-----------------------');
      });
    }
    this.iniciar();
  },

  iniciar() {
    this.mostrarMenu();

    rl.question('Seleccione una opcion: ', (opcion) => {
      switch (parseInt(opcion)) {
        case 1:
          this.agregarLibro();
          break;
        case 2:
          this.mostrarLibros();
          break;
        case 0:
          console.log('Saliendo...');
          rl.close();
          break;
        default:
          console.log('Opcion invalida');
          this.iniciar();
      }
    });
  }
};

app.iniciar();
