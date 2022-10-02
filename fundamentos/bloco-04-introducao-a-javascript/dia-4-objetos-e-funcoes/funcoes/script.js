//Exercício 1
// function verificaPalindromo (string) {
//     let reverse = string.split('').reverse().join('');
//     let palindromo = reverse === string ? true : false;

//     return palindromo;
// }

// console.log(verificaPalindromo('arara'));
// console.log(verificaPalindromo('desenvolvimento'));

// Exercício 2 

// function biggerIndex (array) {
//     let biggerIndex = 0;

//     for (index in array) {
//         if (array[biggerIndex] < array[index]) {
//             biggerIndex = index;
//         }
//     }
//     console.log(biggerIndex);
// }

// biggerIndex([2, 3, 6, 7, 10, 1]);

// Exercício 3

// function lowerIndex (array) {
//     let lowerIndex = 0;

//     for (index in array) {
//         if (array[index] < array[lowerIndex]) {
//             lowerIndex = index;
//         }
//     }
//     console.log(lowerIndex);
// }

// lowerIndex([2, 4, 6, 7, 10, 0, -3]);

//Exercício 4

function biggestName (array) {
    let biggestName = array[0];

    for (names in array) {
        if (array[names].length > biggestName.length) {
            biggestName = array[names];
        }
    }
    console.log(biggestName);
}
biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

// Exercício 5
