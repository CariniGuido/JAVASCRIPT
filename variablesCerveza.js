
const URL = `/apicervezas.json`
const contenidoDOM = document.querySelector("#contenido")
 const cargandoDOM = document.querySelector("#cargando")

document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
       obtenerContenido(URL)      
    }, 2000);
 })