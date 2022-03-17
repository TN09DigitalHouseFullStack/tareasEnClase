let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

// console.log("argv",process.argv[2]);

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach((element, i) => {
            console.log((i + 1) +'. ' + element.titulo + ' - ' + element.estado);
        });

        console.log()
        break;
    case "crear":
        let tituloTarea = process.argv[3];
        let nuevaTarea = {
            titulo: tituloTarea,
            estado: 'pendiente'
        }
        //guardar la tarea
        archivoTareas.guardarTareas(nuevaTarea);
        break;
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
