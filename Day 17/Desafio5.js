function Bissexto(ano) {
    if ((ano % 400 == 0) || (ano % 4 == 0) && (ano % 100 != 0)) {
        console.log(ano + " é um ano bissexto.")
    } else {
        console.log(ano + " não é um ano bissexto.")
    }
}

let ano = Number(prompt("Digite ano para verificar: "))
Bissexto(ano);