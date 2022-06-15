var num = [5, 8, 4, 9, 6, 3]

console.log(num)

/*for (var pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
// Simplificando...
for(var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}