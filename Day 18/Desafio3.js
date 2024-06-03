function Palindro(palavra) {
    let reverso = palavra.split('').reverse().join('');
    if (palavra == reverso) {
        console.log(palavra + " essa palavra é um palindro")
    } else {
        console.log(palavra + " essa palavra não é um palindro")
    }
}
