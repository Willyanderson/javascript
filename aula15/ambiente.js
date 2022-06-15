var num = [5,8,4]
num[3] = 6
num.push(7)

console.log(`A nossa variável composta é ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O comprimento do vetor é de ${num.length} valores.`)
console.log(`Ordem Crescente: ${num.sort()}`)

var pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
