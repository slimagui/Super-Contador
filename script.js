function contar () {
    var ini = document.getElementById("txti") // variavel ini recebe o valor de Inicio
    var fim = document.getElementById("txtf") // variavel fim recebe o valor de fim
    var passo = document.getElementById("txtp") // varivel passo recebe o valor de passo
    var res = document.getElementById("res") // variavel res recebe resultado

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados")
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(ini.value) // var i recebe o valor de ini
        var f = Number(fim.value) // var f recebe o valor de fim
        var p = Number(passo.value) // var p recebe o valor de passo
        if (p <= 0) { // valor de passo nao pode ser menor nem igual a 0
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1 // recebe o valor de 1 caso isso acontece
        }
        if (i < f) { // enquanto inicio menor que fim, contagem crescente
            // Contagem Crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} > `
            }
        } else { // se fim maior que inicio, contagem regressiva
            // Contagem Cegressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} > `
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}