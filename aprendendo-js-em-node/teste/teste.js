const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let maiorNumero = 0;
let numeroInformado;
let contador = 0;

function verificaTeste() {
    for (let i = 0; i <= 9; i+=2) {
        console.log(i);
    }
}

function verificarMaiorNumero() {
    leitor.question("Digite um número: ", function(numero) {
        numeroInformado = parseFloat(numero);

        if (isNaN(numeroInformado)) {
            console.log("Isso não é um número válido. Tente novamente.");
            verificarMaiorNumero();
            return;
        }

        if (numeroInformado > maiorNumero) {
            maiorNumero = numeroInformado;
            console.log("Esse agora é o maior número.");
        } else {
            console.log("Bom número!");
        }

        contador++;

        if (contador < 5) {
            verificarMaiorNumero();
        } else {
            console.log("O maior número entre os informados é: " + maiorNumero);
            leitor.close();
        }
    });
}

verificaTeste();
verificarMaiorNumero();
