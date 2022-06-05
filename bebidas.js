// debugger;

// let nombre;

// nombre = prompt('Ingrese su nombre:');

// alert ('Hola '+nombre);


// var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// for(var i=0; i<7; i++) {
//   alert(dias[i]);
// }

// let entrada = prompt("elija una bebida.");

// while (entrada != "ESC") {
//   switch (entrada) {
//     case "cerveza":
//       alert("toma tu cerveza");
//       break;

//     case "fernet":
//       alert("toma tu fernet");
//       break;

//     case "vino":
//       alert("toma tu vino");
//       break;

//     case "wisky":
//       alert("toma tu wisky");
//       break;
//     default:
//       alert("¿NO VAS A TOMAR NADA?");
//       break;
//   }
//   entrada = prompt("elija una bebida");

// }

// class Producto {
//   constructor(nombre, precio) {
//       this.nombre  = nombre.toUpperCase();
//       this.precio  = parseFloat(precio);
//       this.vendido = false;
//   }
//   sumaIva() {
//       this.precio = this.precio * 1.21;
//   }
//   vender() {
//       this.vendido = true;
//   }
// }
// const producto1 = new Producto("arroz", "125");
// const producto2 = new Producto("fideo", "50");
// producto1.sumaIva();
// producto2.sumaIva();
// producto1.vender();



// function Carrito() {
//   const productos = [];

//   function agregarProducto(producto){
//     productos.push(producto);
//   }

//   function obtenerPrecioTotal(){
//     return productos.reduce((total, p) => total + p.precio, 0);
//   }

//   return {
//    agregarProducto,
//    obtenerPrecioTotal
//   }
// }

// const carrito = Carrito();
// cart.agregarProducto({nombre: 'naranja', precio: 1.25});
// cart.agregarProducto({nombre: 'limon', precio: 1.75});
// console.log(carrito.obtenerPrecioTotal());


// //3




// class BebidaAlcoholica {
//   constructor(tipo, precio, ml, envase, marca) {
//     this.tipo = tipo;
//     this.precio = precio;
//     this.miliLitros = ml;
//     this.envase = envase;
//     this.marca = marca;


//   }

//   mostrarInfo() {
//     return `
// tipo: <b>${this.tipo}</b> <br>;
// precio: <b>${this.precio}</b> <br>;
// ml: <b>${this.ml}</b> <br>;
// envase: <b>${this.envase}</b> <br>;
// marca: <b>${this.marca}</b> <br>;



// `
//   }
// };
// cerveza = new BebidaAlcoholica("cervezaNegra", "500", "750", "vidrio", "ipa");
// wiskye = new BebidaAlcoholica("irlandes", "5100", "750", "vidrio", "wellnes");
// vino = new BebidaAlcoholica("tinto", "850", "750", "vidrio", "piel de cordero");

// document.write(` 
// ${cerveza.mostrarInfo()} <br>
// ${wiskye.mostrarInfo()}  <br>
// ${vino.mostrarInfo()} 
// `);

// clase bebida
class BebidaAlcoholica {
  constructor(tipo, precio, ml, envase, marca) {
    this.tipo = tipo;
    this.precio = precio;
    this.miliLitros = ml;
    this.envase = envase;
    this.marca = marca;
  }// esta llave termina constructor

  // metodo para mostrar informacion
  mostrarInfo() {
    return `<p>tipo: <b>${this.tipo}</b> <br>
            precio: <b>${this.precio}</b> <br>
            ml: <b>${this.miliLitros}</b> <br>
            envase: <b>${this.envase}</b> <br>
            marca: <b>${this.marca}</b> <br></p>`;
  };// esta llave termina metodo 
} // esta llave termina clase


// sumar
const sumarBebidas = (bebidas) => {
  let total = 0;
  for (let i = 0; i < bebidas.length; i++) {
    total = total + parseFloat(bebidas[i].precio);
  }
  return total.toFixed(2);
}

/// creando productos
const cerveza = new BebidaAlcoholica("cervezaNegra", "500", "750", "vidrio", "ipa");
const wiskye = new BebidaAlcoholica("irlandes", "5100", "750", "vidrio", "wellnes");
const vino = new BebidaAlcoholica("tinto", "850", "750", "vidrio", "piel de cordero");

// mostrar en pantalla
document.write(`<p>
${cerveza.mostrarInfo()} <br>
${wiskye.mostrarInfo()}  <br>
${vino.mostrarInfo()} </p>
`);

document.write(`<p>total: ${sumarBebidas([cerveza, wiskye, vino])}</p>`);
