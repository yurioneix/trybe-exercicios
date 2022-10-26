const checkResult = (luckyNumber, betNumber) => luckyNumber === betNumber;

const lottery = (betNumber, callback) => {
    let luckyNumber = Math.floor((Math.random() * 5) + 1); 
    
    return callback(luckyNumber, betNumber) ? `Parabéns, você ganhou!` : `Tente novamente.`;
}

console.log(lottery(5, checkResult));