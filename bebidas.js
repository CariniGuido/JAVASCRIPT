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

const TodasNuestrasBebidas = ['cervezas', 'wiskyes', 'vinos', 'fernet', 'gancia', 'smirnoff'];

function buscarBebidas() {
  let bebidaAbuscar = prompt("busca tu bebida:");
  let resultado = TodasNuestrasBebidas.includes(bebidaAbuscar);
  if (resultado) {
    console.log("tenemos stock.");
  }

  else {
    console.warn("no tenemos stock:");

  }

}
