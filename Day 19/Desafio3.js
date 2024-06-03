function semafaro(cor){
    if (cor == "verde"){
        console.log("PODE IR")
        
    } else if (cor == "amarelo"){
        console.log("ATENÇÃO")
        
    } else if (cor == "vermelho"){
        console.log("PARE")
        
    } else {
        console.log("COR INVALIDA")
    }
}

let cor = prompt("Coloque uma cor: ")
semafaro(cor)