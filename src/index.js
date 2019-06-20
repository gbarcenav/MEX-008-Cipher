//const botonEnviar = document.getElementById("env-agra");
//const genMensaje = document.getElementById("generador-mensaje");
//const agraSeccion = document.getElementById("gracias-solicitud");

//const aparecerAgrad = () => {
//genMensaje.classList.add("aparecer");
//agraSeccion.classList.remove("desaparecer");
//};

//botonEnviar.addEventListener("click", aparecerAgrad);

//Cifrar
const offset = document.getElementById("offset-numb");
let mensajeAcifrar = document.getElementById("mensaje-cifrar");
const mensajeCifrado = document.getElementById("mensaje-secreto");

mensajeAcifrar.addEventListener("keyup", () => {
  mensajeCifrado.value = window.cipher.encode(
    parseInt(offset.value),
    mensajeAcifrar.value.toUpperCase()
  );
});

//Descifrar
const offsetDes = document.getElementById("offset-des");
let mensajeAdes = document.getElementById("codigosecreto");
const mensajeDes = document.getElementById("saber-loc");

mensajeAdes.addEventListener("keyup", () => {
  mensajeDes.value = window.cipher.decode(
    parseInt(offset.value),
    mensajeAdes.value.toUpperCase()
  );
});
