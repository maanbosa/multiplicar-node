// para esta versión se creo el archivo package.json
// con el comando en la linea de comando:
// npm init
// luego se intslo el paquete yargs, con el comando
// npm i yargs --save
// ver la url: https://www.npmjs.com/package/yargs
// esto crea el archivo package-lock.json y
// y la carpeta node_modules que contiene los plugins de node

// requireds
const argv = require('./config/yargs').argv;

// incluimos las funciones definidas en multiplicar.js
// aplicar destructuración para importar una función especifica
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');


// del objeto argv extraemos el arreglo que contiene los comandos
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
            .then
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}