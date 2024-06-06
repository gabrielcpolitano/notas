const readline = require('readline')

const rl = readline.createInterface({
    input: process
})

const escolhas = ["pedra", "papel", "tesoura"]

function resultadoJogo(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
        return "Empate!"

    }else if (
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        return "Você venceu!"    
    } else {
        return "Computador venceu!"
    }

}

  function perguntarEscolha() {
    return new Promise((resolve) => {
        rl.question("Escolha pedra, papel ou tesoura: ", (escolhaUsuario) => {
            resolve(escolhaUsuario.toLowerCase());
        });
    }
        )
  }
  
  
  
  
  
  
  
  
  
  
  
  
  