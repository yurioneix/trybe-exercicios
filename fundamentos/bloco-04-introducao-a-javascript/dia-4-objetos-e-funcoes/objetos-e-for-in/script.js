// Exercício 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

   console.log('Bem vinda, ' + info.personagem)

// Exercício 2
info['recorrente'] = 'Sim';
console.log(info)

// Exercício 3
for (property in info) {
    console.log(property);
}