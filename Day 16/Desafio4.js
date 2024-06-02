function geometrica(num1, num2, num3) {
    return Math.cbrt(num1 * num2 * num3)
}

let numero1 = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))
let numero3 = Number(prompt("Digite o terceiro número: "))

let resultado = geometrica(numero1, numero2, numero3)

console.log(resultado)