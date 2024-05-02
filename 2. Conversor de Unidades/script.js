// Selecionar os Elementos
var entrada = document.querySelector('#input');
var de = document.querySelector('#from');
var para = document.querySelector('#to');
var saida = document.querySelector('#output');
var botao = document.querySelector('#convert-btn');
var mensagem = document.querySelector('#message');

// Função para converter as unidades
function conversor() {
    var valorDe = de.value;
    var valorPara = para.value;

    if (valorDe === valorPara) {
        saida.value = entrada.value;
        mensagem.textContent = '';
        return;
    }

    console.log(valorDe, valorPara);
}

// Botão
botao.addEventListener('click', conversor);