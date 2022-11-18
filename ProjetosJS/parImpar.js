function verificador(){
    var readline = require("readline");
   
    let leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
    }); 
    leitor.question("Digite um número maior que inteiro maior que zero: \n", (resposta_digitada) =>{
        let resp = resposta_digitada % 2
//console.log(rest);
        if(resp == 0){
        console.log("Número par armazenado em P")
        leitor.close();
        }
        else{
        console.log("Número ímpar armazenado em I")
        leitor.close();
        }
    });
}
verificador();
