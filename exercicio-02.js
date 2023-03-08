/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/
function isFibonacci(input) {
  
  if (input < 0) {
    return "Número inválido, informe um número positivo.";
  }
  
  if (input === 0 || input === 1) {
    return input;
  }
  
  let fibNum = 1;
  let prevFibNum = 1;
  
  for (let i = 2; i < input; i++) {
    let temp = fibNum;
    fibNum += prevFibNum;
    prevFibNum = temp;
    
    if (fibNum === input) {
      return `${input} pertence à sequência de Fibonacci.`;
    }
  }

  return `${input} não pertence à sequência de Fibonacci.`;
}

console.log("primeira chamada: "+isFibonacci(-1));
console.log("segunda chamada: "+isFibonacci(5));
console.log("terceira chamada: "+isFibonacci(21));
console.log("quarta chamada: "+isFibonacci(9));