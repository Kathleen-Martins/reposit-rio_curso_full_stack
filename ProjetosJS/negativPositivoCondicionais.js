function verificador(){
    var readline = require("readline");
   
    let leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
    }); 
        leitor.question("Digite um número Real: \n", (resposta_digitada) =>{
            let resp = resposta_digitada
            if(resp > 0){
                console.log("O número digitado é positivo")
                leitor.close();
            }
            else if(resp == 0){
                console.log("Você digitou o número 0")
                leitor.close();
            }
            else{
                console.log("O número digitado é negativo")
                leitor.close();
            }
        });
    }

verificador();
