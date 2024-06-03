function maior(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3){
        console.log(numero1 + " é maior")
    }else if (numero2 > numero1 && numero2 > numero3) {
        console.log(numero2 + " é maior")
    } else {
        console.log(numero3 + " é maior")   
    }
}

let numero1 = Number(prompt("Digite um número: "))
let numero2 = Number(prompt("Digite outro número: "))
let numero3 = Number(prompt("Digite outro número: "))

maior(numero1, numero2, numero3)