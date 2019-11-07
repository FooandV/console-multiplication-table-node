const argv = require('./config/yargs').argv;
const colors = require('colors');

/* cuando se utiliza la destructuración es como importar las funciones que se encuentran declaras
en otra parte, con objeto de poder utilizar sus propiedades */
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];
// console.log(comando);
/* el switch es como un if que nos va permitir poder determinar una accion en base
a una condicion que se debe definir: */
switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then(archivo => {
        console.log(`Archivo creado: ${archivo.green}`);
      })
      .catch(err => {
        console.log(err);
      });

    console.log("Crear");
    break;

  default:
    console.log("comando no reconocido");
}
// console.log(argv)
// let base = '2';

// console.log(process.argv);

let argv2 = process.argv;
// let parametro= argv[2] /* posición 0 ya que el arreglo empieza desde esa posición */
// let base = parametro.split('=')[1]/* el split es para separar elementos, convertir de un string a un arreglo */
// console.log(argv.base);
// console.log('Limite',argv.limite);
// console.log(argv2);
