var num = window.document.getElementById('txtn')
var lista = window.document.getElementById('flista')
var res = window.document.getElementById('res')
var valores = []

function inNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (inNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${total}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>A soma de todos os valores cadastrados é <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p>`
    }
}