function palindro(palavra) {
    var reverso = palavra.split("").reverse().join("")
    if (palavra.toLowerCase() === reverso.toLowerCase()) {
        console.log(palavra + " é um palindro")
    } else {
        console.log(palavra + " não é um palindro")
    }
}

palavra = prompt("Escreva uma palavra: ")
palindro(palavra)