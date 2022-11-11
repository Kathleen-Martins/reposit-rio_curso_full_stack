var readline = require("readline");

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

leitor.question("Digite uma das opções à cima \n",function(resposta_digitada) {
    var resp = resposta_digitada;
    leitor.close();
})