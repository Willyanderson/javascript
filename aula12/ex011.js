var idade = 19
console.log(`Você que tem ${idade} anos de idade.`)
if (idade < 16) {
    console.log('Não vota!')
} else if (idade < 18 || idade > 65) {
    console.log('O voto é opcional!')
} else {
    console.log('O voto é obrigatório!')
}
