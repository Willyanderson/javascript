function gerar() {
    var num = window.document.getElementById('txtn')
    var res = window.document.getElementById('res')

    if (num.value.length == 0) {
        window.alert('[ERRO] Informe os dados!')
    } else {
        var n = Number(num.value)
        var c = 1
        while (c <= 10) {
            res.innerHTML += `${n}  x  ${c}  = ${n*c} <br>`
            c++
        }
    }
}