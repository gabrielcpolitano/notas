// Função para solicitar entrada do usuário
function pedirNumero(mensagem) {
    return parseFloat(prompt(mensagem));
}

// Programa que solicita dois números e exibe soma, subtração, multiplicação e divisão
function operacoesBasicas() {
    let num1 = pedirNumero("Digite o primeiro número:");
    let num2 = pedirNumero("Digite o segundo número:");
    
    console.log("Soma:", num1 + num2);
    console.log("Subtração:", num1 - num2);
    console.log("Multiplicação:", num1 * num2);
    console.log("Divisão:", num1 / num2);
}

// Programa que calcula a média aritmética de dois números
function mediaAritmeticaDoisNumeros() {
    let num1 = pedirNumero("Digite o primeiro número:");
    let num2 = pedirNumero("Digite o segundo número:");
    
    let media = (num1 + num2) / 2;
    console.log("Média aritmética:", media);
}

// Programa que calcula a média aritmética de três notas
function mediaAritmeticaTresNotas() {
    let nota1 = pedirNumero("Digite a primeira nota:");
    let nota2 = pedirNumero("Digite a segunda nota:");
    let nota3 = pedirNumero("Digite a terceira nota:");
    
    let media = (nota1 + nota2 + nota3) / 3;
    console.log("Média aritmética das três notas:", media);
}

// Programa que calcula a média geométrica entre três números
function mediaGeometricaTresNumeros() {
    let num1 = pedirNumero("Digite o primeiro número:");
    let num2 = pedirNumero("Digite o segundo número:");
    let num3 = pedirNumero("Digite o terceiro número:");
    
    let mediaGeometrica = Math.pow(num1 * num2 * num3, 1/3);
    console.log("Média geométrica:", mediaGeometrica);
}

// Programa que calcula o IMC de um indivíduo
function calcularIMC() {
    let peso = pedirNumero("Digite o peso em kg:");
    let altura = pedirNumero("Digite a altura em metros:");
    
    let imc = peso / (altura * altura);
    console.log("IMC:", imc);
}

// Programa que calcula o perímetro de um círculo
function perimetroCirculo() {
    let raio = pedirNumero("Digite o raio do círculo:");
    
    let perimetro = 2 * Math.PI * raio;
    console.log("Perímetro do círculo:", perimetro);
}

// Programa que calcula a área de um círculo
function areaCirculo() {
    let raio = pedirNumero("Digite o raio do círculo:");
    
    let area = Math.PI * raio * raio;
    console.log("Área do círculo:", area);
}

// Execução dos programas
operacoesBasicas();
mediaAritmeticaDoisNumeros();
mediaAritmeticaTresNotas();
mediaGeometricaTresNumeros();
calcularIMC();
perimetroCirculo();
areaCirculo();
