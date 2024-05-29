// 1. Verificar se um número é positivo, negativo ou zero
function verificarNumero(num) {
  if (num > 0) {
    console.log("Positivo");
  } else if (num < 0) {
    console.log("Negativo");
  } else {
    console.log("Zero");
  }
}

// 2. Calcular a média de duas notas e verificar aprovação
function calcularMedia(nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  if (media >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

// 3. Verificar a situação do estudante de acordo com a média final
function situacaoEstudante(media) {
  if (media >= 9) {
    console.log("Excelente");
  } else if (media >= 7) {
    console.log("Bom");
  } else if (media >= 5) {
    console.log("Média");
  } else {
    console.log("Ruim");
  }
}

// 4. Calcular o IMC e verificar a categoria de peso
function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  if (imc < 18.5) {
    console.log("Abaixo do peso");
  } else if (imc < 24.9) {
    console.log("Peso normal");
  } else if (imc < 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obeso");
  }
}

// 5. Verificar se um ano é bissexto
function verificarBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("Ano bissexto");
  } else {
    console.log("Ano não bissexto");
  }
}

// Exemplos de uso:

// Verificar se um número é positivo, negativo ou zero
verificarNumero(10);  // Saída: Positivo
verificarNumero(-5);  // Saída: Negativo
verificarNumero(0);   // Saída: Zero

// Calcular a média de duas notas e verificar aprovação
calcularMedia(8, 6);  // Saída: Aprovado
calcularMedia(5, 4);  // Saída: Reprovado

// Verificar a situação do estudante de acordo com a média final
situacaoEstudante(9.5); // Saída: Excelente
situacaoEstudante(7.5); // Saída: Bom
situacaoEstudante(5.5); // Saída: Média
situacaoEstudante(3.5); // Saída: Ruim

// Calcular o IMC e verificar a categoria de peso
calcularIMC(70, 1.75); // Saída: Peso normal
calcularIMC(50, 1.75); // Saída: Abaixo do peso
calcularIMC(80, 1.75); // Saída: Sobrepeso
calcularIMC(95, 1.75); // Saída: Obeso

// Verificar se um ano é bissexto
verificarBissexto(2020); // Saída: Ano bissexto
verificarBissexto(2021); // Saída: Ano não bissexto
