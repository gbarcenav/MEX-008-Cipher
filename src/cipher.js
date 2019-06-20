window.cipher = {
  //Cifrado
  encode: (offset, textoAcifrar) => {
    let carCif = "";
    let texCif = "";
    for (let i = 0; i < textoAcifrar.length; i++) {
      let ascii = textoAcifrar.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        carCif = ((ascii - 65 + offset) % 26) + 65;
      } else {
        carCif = ascii;
      }
      texCif += String.fromCharCode(carCif);
    }
    return texCif;
  },

  // Descifrado
  decode: (offset, textoAdescifrar) => {
    let carDesif = "";
    let texDesif = "";
    for (let i = 0; i < textoAdescifrar.length; i++) {
      let ascii = textoAdescifrar.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        carDesif = ((ascii + 65 - offset + 26) % 26) + 65;
      } else {
        carDesif = ascii;
      }
      texDesif += String.fromCharCode(carDesif);
    }

    return texDesif;
  }
};
