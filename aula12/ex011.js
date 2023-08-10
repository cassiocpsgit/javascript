var idade = 15
if (idade < 16) {
    console.log('Você não pode votar.')
} else if (idade >= 16 && idade < 18) {    
    console.log('Seu voto é opcional.')
} else if (idade >= 18 && idade < 67) {
    console.log('Seu voto é obrigatório.')
} else if (idade >= 67) {
    console.log('Seu voto é opcional.')
}