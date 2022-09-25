let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1
// for (let index = 0; index < numbers.length; index +=1) {
//     console.log(numbers[index]);
// }

//Exercício 2
// let sum = 0; 

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }
// console.log(sum)

//Exercício 3
// let average = 0; 

// for(let index = 0; index < numbers.length; index += 1) {
//     average += numbers[index];
// }
// average = average / numbers.length

// Exercício 4
// if (average > 20) {
//     console.log('Valor maior que 20')
// } else if (average < 20) {
//     console.log('Valor menor ou igual a 20')
// }
// console.log(average)

// Exercício 5 

// let bigger = numbers[0]; 

// for (let index = 0; index < numbers.length; index += 1) {
//     if (bigger < numbers[index]) {
//         bigger = numbers[index];
//     }
// }
// console.log(bigger)

// Exercício 6 

// let odd = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 != 0) {
//         odd += 1; 
//     } else {
//         console.log('Nenhum valor ímpar encontrado');
//     }
// }
// console.log(odd);

// Exercício 7

let smaller = numbers[0]; 

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < smaller) {
        smaller = numbers[index];
    }
}
console.log(smaller)