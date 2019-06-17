// Función cifrar
const encode = (str, offset) => {
  str = str.toUpperCase();
  let encryptedStr = "";
  let encryptedChar = "";
  for (let i = 0; i < str.length; i++) {
    let charASCII = str.charCodeAt(i);
    encryptedChar = ((charASCII - 65 + offset) % 26) + 65;
    encryptedStr = encryptedStr + String.fromCharCode(encryptedChar);
  }
  return encryptedStr;
};
encode("Adios", 2);
