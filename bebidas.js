

let miFormulario = document.getElementById("formularioContacto");
 miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {

  //Cancelamos el comportamiento del evento
  e.preventDefault();
  //Obtenemos el elemento desde el cual se disparó el evento
  let formulario = e.target
  //Obtengo el valor del primero hijo <input type="text">
  console.log(formulario["nombre"].value);
  if (formulario["nombre"].value === "") {
    toastSA();
    console.log(formulario["nombre"].value);


    return
  }
  console.log(formulario["apellido"].value);
  if (formulario["apellido"].value === "") {
    toastSA();
    console.log(formulario["apellido"].value);


    return
  }
  console.log(formulario["email"].value);
  if (formulario["email"].value === "") {
    toastSA();
    console.log(formulario["email"].value);


    return
  }
  guardarDatosDeUsr(

    formulario["nombre"].value,
    formulario["apellido"].value,
    formulario["email"].value
  )
  Swal.fire({
    title: "Registro exitoso",
    confirmButtonText: "aceptar",
});
}



const toastSA = (mensaje, bgColor, tiempo) => {
  Swal.fire({
    icon: 'error',
    title: mensaje || 'debes rellenar todos los campos',
    Text: 'que completar el campo',
    position: 'top-center',
    showConfirmButton: false,
    toast: true,
    timer: tiempo || 3000,
    timerProgressBar: true,
    background: bgColor || 'white',
    color: "black",
  })
}




const ofertasDiv = document.getElementById("ofertas");

const arrayOfertas = [
  "1 fernet branca mas una coca 1400 pesos",
  "gancia mas una sprite 900 pesos",
  "1 cajon de cervezas te llevas una de regalo"
];

// Aleatorio del entre 0 y 2
// Cambiar segun cuantos haya en ofertas
const aleatorio = Math.round(Math.random() * (3 - 1) * 1);

 ofertasDiv.innerHTML = arrayOfertas[aleatorio];


const inputNombre = document.querySelector("#inputNombre")
const inputApellido = document.querySelector("#inputApellido")
const inputEmail = document.querySelector("#inputEmail")
const btnSubmit = document.querySelector("#submit")

  let datosDeInput = ""
 document.addEventListener("submit", (e) => {
   e.preventDefault()
   guardarDatosDeUsr()
   alert(`Gracias por registrarse 😃`)
 })

function guardarDatosDeUsr(nombre, apellido, email) {
  debugger
  const datosDeUsr = {
    nombre: nombre,
    apellido: apellido,
    email: email
  }
  let str = JSON.stringify(datosDeUsr)
  localStorage.setItem("datosDeUsr", str)
}

function recuperoDatosDeUsr() {
  if (localStorage.getItem("datosDeUsr")) {
    const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
    nombre.value = datosDeUsr.nombre
    apellido.value = datosDeUsr.apellido
    email.value = datosDeUsr.email
    return
  }
  
}

;



