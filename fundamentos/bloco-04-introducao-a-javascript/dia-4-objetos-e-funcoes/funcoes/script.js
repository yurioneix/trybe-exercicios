function verificaPalindromo (string) {
    let arrayString = string.split('')
    console.log(arrayString);
    let arrayStringReverse = arrayString.reverse();
    console.log(arrayStringReverse);

    let palindromo = (arrayString === arrayStringReverse) ? true : false;

    return palindromo;
}

console.log(verificaPalindromo('beterraba'));