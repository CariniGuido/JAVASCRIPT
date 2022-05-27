debugger;

let nombre;

nombre = prompt('Ingrese su nombre:');

document.write('Hola+');

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(var i=0; i<7; i++) {
  alert(dias[i]);
}

let entrada = prompt("elija una bebida.");

while (entrada != "ESC") {
  switch (entrada) {
    case "cerveza":
      alert("toma tu cerveza");
      break;

    case "fernet":
      alert("toma tu fernet");
      break;

    case "vino":
      alert("toma tu vino");
      break;

    case "wisky":
      alert("toma tu wisky");
      break;
    default:
      alert("¿NO VAS A TOMAR NADA CAGÓN?");
      break;
  }
  entrada = prompt("elija una bebida");
}
