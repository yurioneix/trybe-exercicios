let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1
// for (let index = 0; index < numbers.length; index +=1) {
//     console.log(numbers[index]);
// }

//Exercício 2
let sum = 0; 

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

console.log(sum)