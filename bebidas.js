// // // debugger;

// // // let nombre;

// // // nombre = prompt('Ingrese su nombre:');

// // // alert ('Hola '+nombre);


// // // var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// // // for(var i=0; i<7; i++) {
// // //   alert(dias[i]);
// // // }

// // // let entrada = prompt("elija una bebida.");

// // // while (entrada != "ESC") {
// // //   switch (entrada) {
// // //     case "cerveza":
// // //       alert("toma tu cerveza");
// // //       break;

// // //     case "fernet":
// // //       alert("toma tu fernet");
// // //       break;

// // //     case "vino":
// // //       alert("toma tu vino");
// // //       break;

// // //     case "wisky":
// // //       alert("toma tu wisky");
// // //       break;
// // //     default:
// // //       alert("¿NO VAS A TOMAR NADA?");
// // //       break;
// // //   }
// // //   entrada = prompt("elija una bebida");

// // // }



// // // clase bebida
// // class BebidaAlcoholica {
// //   constructor(tipo, precio, ml, envase, marca) {
// //     this.tipo = tipo;
// //     this.precio = precio;
// //     this.miliLitros = ml;
// //     this.envase = envase;
// //     this.marca = marca;
// //   }// esta llave termina constructor

// //   // metodo para mostrar informacion
// //   mostrarInfo() {
// //     return `<p>tipo: <b>${this.tipo}</b> <br>
// //             precio: <b>${this.precio}</b> <br>
// //             ml: <b>${this.miliLitros}</b> <br>
// //             envase: <b>${this.envase}</b> <br>
// //             marca: <b>${this.marca}</b> <br></p>`;
// //   };// esta llave termina metodo 
// // } // esta llave termina clase


// // // sumar
// // const sumarBebidas = (bebidas) => {
// //   let total = 0;
// //   for (let i = 0; i < bebidas.length; i++) {
// //     total = total + parseFloat(bebidas[i].precio);
// //   }
// //   return total.toFixed(2);
// // }

// // /// creando productos
// // const cerveza = new BebidaAlcoholica("cervezaNegra", "500", "750", "vidrio", "ipa");
// // const wiskye = new BebidaAlcoholica("irlandes", "5100", "750", "vidrio", "wellnes");
// // const vino = new BebidaAlcoholica("tinto", "850", "750", "vidrio", "piel de cordero");

// // // mostrar en pantalla
// // document.write(`<p>
// // ${cerveza.mostrarInfo()} <br>
// // ${wiskye.mostrarInfo()}  <br>
// // ${vino.mostrarInfo()} </p>
// // `);

// // document.write(`<p>total: ${sumarBebidas([cerveza, wiskye, vino])}</p>`);

// const TodasNuestrasBebidas = ['cervezas', 'wiskyes', 'vinos', 'fernet', 'gancia', 'smirnoff'];

// function buscarBebidas() {
//   let bebidaAbuscar = prompt("busca tu bebida:");
//   let resultado = TodasNuestrasBebidas.includes(bebidaAbuscar);
//   if (resultado) {
//     console.log("tenemos stock.");
//   }

//   else {
//     console.warn("no tenemos stock:");

//   }

// }


// class producto {

//   constructor(id, nombre, precio) {
//     this.id = id
//     this.nombre = nombre
//     this.precio = precio
//   }
// }
// const productos =
//   [
//     { id: 1, nombre: "CERVEZA", precio: 500 },
//     { id: 2, nombre: "GANCIA", precio: 750 },
//     { id: 3, nombre: "FERNET", precio: 1200 },
//     { id: 4, nombre: "WISKEY", precio: 5100 }]

// function buscarProducto() {
//   let aBuscar = prompt("ingrese la bebida que quiere buscar:").toUpperCase()

//   let resultado = productos.filter((producto) => producto.nombre.includes(aBuscar))

//   if (resultado !== undefined) {
//     console.clear();
//     console.table(resultado);
//   }
// }


// function generadorAutomatico() {
//   productos.push(new Producto(1234, "cerveza", 500))
//   productos.push(new Producto(2345, "gancia", 750))
//   productos.push(new Producto(3456, "fernet", 1200))
//   productos.push(new Producto(4567, "wiskey", 5100))

// }
// generadorAutomatico()

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
}

const toastSA = (mensaje, bgColor, tiempo) => {
  Swal.fire({
    icon: 'error',
    title: mensaje || 'debes rellenar este campo',
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

// let datosDeInput = ""
document.addEventListener("submit", (e) => {
  e.preventDefault()
  guardarDatosDeUsr()
  alert(`Gracias por su compra 😃`)
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

const contenedorProductos = document.getElementById ("contenedorProductos")
let carrito = []


productosHtml.forEach(bebidasHtml => {
  const div = document.createElement("div")
  div.classList.add("card")
  div.innerHTML =  `<div class="card">
                                   <img src="${bebidasHtml.img}" class="card-img-top" alt="bebidas">
                                  <div class="card-body">
                                  <h5 class="card-title">${bebidasHtml.nombre}</h5>
                                 
                                  <p class="card-text">Precio $: ${bebidasHtml.precio}</p>
                                  <a href="#" class="btn btn-primary" id=comprar${bebidasHtml.id}>Comprar</a>
                                  </div>
                                  </div>`

                                  contenedorProductos.appendChild(div)
          
          
          
          










  })

