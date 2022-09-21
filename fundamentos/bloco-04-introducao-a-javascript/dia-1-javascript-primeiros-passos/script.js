//Exercício 1

const a = 5; 
const b = 10; 

let operacao = '';
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
    case 'Multiplicação':
        resultado = a * b;
        console.log(resultado)
        break;
    case 'Divisão':
        resultado = a / b;
        console.log(resultado)
        break;
    case 'Módulo': 
        resultado = a % b;
        console.log(resultado)
        break;
    default:
        console.log('Insira operação válida')
}

// Exercício 2