let tareas = [];
let contadorId= 0;


function crearTarea(titulo, priporidad){
    contadorId++;
    return{
        id: contadorId,
        titulo: titulo,
        priporidad: priporidad,
        estado: "pendiente"
    }
}

function renderizarTablero(){
    document.querySelector("#lista-pendiente").innerHTML = "";
    document.querySelector("#lista-progreso").innerHTML = "";
    document.querySelector("#lista-hecho").innerHTML = "";

    tareas.forEach((tarea) => {
        const columna = document.querySelector(`#lista-${tareas.estado}`)
        columna.appendChild(crearTarjetaHTML (tarea))
    })

    actualizarContador()
}

function actualizarContador(){
    const pendiente = tareas.filter((t)=> {return t.estado !== "hecho" }).length
    document.querySelector("#contador-pendientes").textContent = `${pendientes} tareas{pendientes} === 1 ? "" : "s"`
}


function crearTarjetaHTML(tarea){
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.dataset.priporidad=tarea.priporidad;
    tarjeta.dataset.id = tarea.id;

    const titulo = document.createElement("p");
    titulo.textContent = tarea.titulo;

    const acciones = document.createElement("div")
    acciones.classList.add("acciones")

    const btnAvanzar = document.createElement("button")
    btnAvanzar.textContent = "Avanzar ->"

    btnAvanzar.classList.add("btn-avanzar")

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar X"
    btnEliminar.classList.add("btn-eliminar")

    acciones.appendChild(btnAvanzar)
    acciones.appendChild(btnEliminar)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(acciones)

    return tarjeta

}

