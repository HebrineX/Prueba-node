const fs = require("fs");

let archivoDeTareas = {
    archivo : 'tareas.json',
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.archivo,'utf-8'))

    },
    EscribirJSON : function(aGuardar){
        let unArrayJSON = JSON.stringify(aGuardar)
        return fs.writeFileSync(this.archivo,unArrayJSON,'utf-8')
    },

    guardarTarea : function(datoIgresado){  
        let tareasOriginal = this.leerJSON()
        let tareasFinal = [...tareasOriginal].concat(datoIgresado)
        this.EscribirJSON(tareasFinal)
    },

    filtrarPorEstado : function(estado){
        let tareas = this.leerJSON()
        if(estado == undefined){
        let ePendiente = tareas.filter(tareas => tareas.estado == "Pendiente");
        let inProgreso = tareas.filter(tareas => tareas.estado == "En progreso");
        let estaTerminada = tareas.filter(tareas => tareas.estado == "Terminada");
        console.log("Las Tareas Pendientes Son :")
        console.log(ePendiente);
        console.log("Las tareas en progreso son:")
        console.log(inProgreso);
        console.log("las tareas terminadas Son:")
        console.log(estaTerminada);
        }else if(estado == "pendiente"){
            let ePendiente = tareas.filter(tareas => tareas.estado == "Pendiente")
            console.log("Las Tareas Pendientes Son :")
            console.log(ePendiente)
        }else if(estado == "progreso"){
            let inProgreso = tareas.filter(tareas => tareas.estado == "En progreso")
            console.log("Las tareas en progreso son:")
            console.log(inProgreso)
        }else if(estado == "terminada"){
            let estaTerminada = tareas.filter(tareas => tareas.estado == "Terminada")
            console.log("las tareas terminadas Son:")
            console.log(estaTerminada)
        }

    }


}

module.exports = archivoDeTareas