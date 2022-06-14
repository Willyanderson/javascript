function contar() {
    var i = window.document.getElementById('txti')
    var f = window.document.getElementById('txtf')
    var p = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossível contar! Falta dados...'
    } else {
        res.innerHTML = 'Contando: <br>'
        var inicio = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)
        if (passo <= 0) {
            window.alert('Passo inválido! Consideerando PASSO 1')
            passo = 1
        }
        if (inicio < fim) {
            for(var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += '\u{1F3C1}'   
        } else {
            for(var c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }

}