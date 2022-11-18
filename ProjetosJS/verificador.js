function verificador(){
    var readline = require("readline");
    
        let leitor = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
        }); 
            leitor.question("Digite um número Real: \n", (resposta_digitada) =>{
                let resp = resposta_digitada
                if(resp >= 100){
                    console.log("100")
                    leitor.close();
                }
                else{
                    console.log("0")
                    leitor.close();
                }
            });
    }
verificador();
