//Exercício 1
// function verificaPalindromo (string) {
//     let reverse = string.split('').reverse().join('');
//     let palindromo = reverse === string ? true : false;

//     return palindromo;
// }

// console.log(verificaPalindromo('arara'));
// console.log(verificaPalindromo('desenvolvimento'));

// Exercício 2 

function biggerIndex (array) {
    let biggerIndex = 0;

    for (index in array) {
        if (array[biggerIndex] < array[index]) {
            biggerIndex = index;
        }
    }
    console.log(biggerIndex);
}

biggerIndex([2, 3, 6, 7, 10, 1]);
