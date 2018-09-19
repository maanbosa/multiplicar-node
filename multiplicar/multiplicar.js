// requireds

// API for interacting with the File System
const fs = require('fs');

let listarArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`Los valores o uno de ellos ${base} o ${limite} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i}`);
        }
    })

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${ base } no es un número`);
            return;
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`)
        });

    })
}

// module es un objeto de tipo global
// se incluyen la funciones a exportar 
module.exports = {
    crearArchivo,
    listarArchivo
}