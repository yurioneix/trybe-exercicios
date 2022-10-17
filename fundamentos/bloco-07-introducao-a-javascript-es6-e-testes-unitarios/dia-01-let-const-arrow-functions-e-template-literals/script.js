// Exercício 1
const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);
  testingScope(false);

//Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];


const sortOddsAndEvens = () => oddsAndEvens.sort((a, b) => a - b);

console.log(sortOddsAndEvens()); // será necessário alterar essa linha