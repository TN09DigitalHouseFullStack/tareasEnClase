const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        let auxTareas = fs.readFileSync(this.archivo, 'utf-8');
        let auxJSONtareas = JSON.parse(auxTareas)
        return auxJSONtareas;
    },
    guardar,
    escribir,
    filtrar
}
module.exports = archivoTareas;