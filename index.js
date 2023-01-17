var boton = document.getElementById("pokemon2");
var blocknotas = document.getElementById("blocknotas");

function msj() {
  Swal.fire(
    "¡¡ LO SIENTO !!",
    "Estamos trabajando aun en la pagina, vuelve en otro momento!",
    "error"
  );
}

boton.onclick = msj;
blocknotas.onclick = msj;
