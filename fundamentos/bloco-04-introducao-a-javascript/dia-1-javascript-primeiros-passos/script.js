//Exercício 1

const a = 5; 
const b = 10; 

let operacao = 'Subtração';
let resultado;

switch (operacao) {
    case 'Adição': 
        resultado = a + b;
        console.log(resultado)
        break;
    case 'Subtração': 
        resultado = a - b;
        console.log(resultado)
        break;
}