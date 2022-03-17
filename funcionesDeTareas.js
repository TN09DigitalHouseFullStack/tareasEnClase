const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        let auxTareas = fs.readFileSync(this.archivo, 'utf-8');
        let auxJSONtareas = JSON.parse(auxTareas)
        return auxJSONtareas;
    },

    escribirJSON: function(tareas){
        let auxTareas = JSON.stringify(tareas, null, ' ');
        return fs.writeFileSync(this.archivo, auxTareas)
    },

    guardarTareas: function(tarea){
        //aquì llamo a leer
        let tareas = this.leerArchivo();
        //aquí hago un push al array
        tareas.push(tarea);
        //aquí llamo a escribir
        this.escribirJSON(tareas);
    }

}



module.exports = archivoTareas;