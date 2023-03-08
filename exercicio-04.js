/*
5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

let texto = "Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;";

let textoReverso;

for(let i = texto.length; i>=0; i--){
  textoReverso += texto[i];
}
textoReverso = textoReverso.replaceAll("NaN","");

console.log(texto);
console.log(textoReverso);
