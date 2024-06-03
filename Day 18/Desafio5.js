function dentroDoIntervalo (numero, limiteInferior, limiteSuperior) {
    if(numero >= limiteInferior && numero <= limiteSuperior) {
        console.log("Está dentro do limite")
    } else {
        console.log("Está fora do limite")
    }
}

dentroDoIntervalo(5, 20, 7)