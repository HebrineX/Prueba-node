const archivosTareas = require('./funcionesDeTareas');


let entrada = process.argv[2];
let parametroDeEntrada = process.argv[3];

switch(entrada){
    case "listar":
        console.log("---------------------------------------------")
        console.log("|      El estado de las Tareas son :        |")
        console.log("---------------------------------------------")
        let tareas = archivosTareas.leerJSON();
        tareas.forEach(element => {
            console.log(element);
            
        });
        break;

    case "crear":
        let recConsola = [{
            "titulo" : parametroDeEntrada,
            "estado" : "Pendiente"
        }];
        archivosTareas.guardarTarea(...recConsola);
        console.log("---------------------------------------------")
        console.log("Se Creo la tarea :"+ parametroDeEntrada);
        console.log("---------------------------------------------")
        break;
        
    case "filtrar":
        if(parametroDeEntrada == "progreso" ||parametroDeEntrada =="terminada"||parametroDeEntrada =="pendiente"|| parametroDeEntrada == undefined ){
            console.log("---------------------------------------------")
            console.log("|      El estado de las Tareas son :        |")
            console.log("---------------------------------------------")
            archivosTareas.filtrarPorEstado(parametroDeEntrada)
        }else{
            console.log("-----------------------------------------------------------")
            console.log("|Para mas detalles de filtro las opciones disponibles son;|")
            console.log("|          pendiente / terminada / progreso               |")
            console.log("-----------------------------------------------------------")

        }
        break;

    case undefined:
        console.log("-------------------------------------------------");
        console.log("|   Atencion Debe poner un parametro valido:    |");
        console.log("|          Los parametros validos son:          |");
        console.log("|           Crear / Listar / Filtrar            |");
        console.log("-------------------------------------------------");
        break;

    default:
        console.log("-------------------------------------------------");
        console.log("|   Atencion Debe poner un parametro valido:    |");
        console.log("|          Los parametros validos son:          |");
        console.log("|           Crear / Listar / Filtrar            |");
        console.log("-------------------------------------------------");

}

