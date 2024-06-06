for (let numero = 2; numero <= 100; numero++) {
    let ehPrimo = true;

    // O loop agora vai até a raiz quadrada do número para otimização
    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
        if (numero % divisor === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        console.log(numero);
    }
}
