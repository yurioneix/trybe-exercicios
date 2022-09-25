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
// console.log(average / numbers.length)

// Exercício 4
// if (average > 20) {
//     console.log('Valor maior que 20')
// } else if (average < 20) {
//     console.log('Valor menor ou igual a 20')
// }

// Exercício 5 

let bigger = 0; 

for (let index = 0; index < numbers.length; index += 1) {
    if (bigger < numbers[index]) {
        bigger = numbers[index];
    }
}
console.log(bigger)
