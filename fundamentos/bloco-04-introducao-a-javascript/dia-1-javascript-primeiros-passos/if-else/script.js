const notaPessoaCandidata = 90; 

if (notaPessoaCandidata >= 80) {
    console.log('Parabéns, você foi aprovada(o)')
} else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {
    console.log('Você está na nossa lista de espera')
} else {
    console.log('Você foi reprovada(o)')
}