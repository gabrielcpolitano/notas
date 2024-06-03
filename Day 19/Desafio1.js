function estacao(mes) {
    if (mes < 3 || mes === 12){
        console.log("Verão")
    } else if (mes < 6) {
        console.log("Outono")
    } else if (mes < 9) {
        console.log("Inverno")
    } else {
        console.log("Primavera")
        
    }
}

estacao(12)