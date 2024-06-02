let nota1 = Number(prompt("Nota 1: "))
let nota2 = Number(prompt("Nota 2: "))
let média = (nota1 + nota2) / 2

if (média >= 9) {
    console.log("EXCELENTE")
} else if (média >= 7)  {
    console.log("BOM")
} else if (média >= 5) {
    console.log("MÉDIA")   
} else {
    console.log("RUIM")
}