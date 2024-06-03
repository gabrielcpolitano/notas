let peso = Number(prompt("Digite seu peso: "))
let altura = Number (prompt("Digite sua altura: "))
let imc = peso / (altura ** 2)

if (imc >= 30) {
    console.log("OBESIDADE")
} else if (imc >= 25) {
    console.log("SOBREPESO")
} else if (imc >= 18.5) {
    console.log("NORMAL")
} else {
    console.log("BAIXO")
}