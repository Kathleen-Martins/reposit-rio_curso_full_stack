let GC = 30
let GF = 86

function converteCparaF(){
    grauemF = ((GC * (9/5)) + 32)
    return grauemF;
}



function converteFparaC(){
    grauemC = ((GF - 32) * (5/9))
    return grauemC;
}


function menu(){
    console.log("******Bem vindo(a) ao Coversor de Temperaturas******\n")
    console.log("1 - converter de Celsius para Farenheit\n")
    console.log("2 - para converter de Farenheit para Celsius\n")
    console.log("3 - para encerrar o conversor\n\n")
    console.log("*******************************************************")

    var readline = require("readline");
   
    
   
    let leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
    }); 
        leitor.question("Digite a opção escolhida: \n", (resposta_digitada) =>{
            let resp = resposta_digitada
            //while(resp != 3){
                switch(Number(resposta_digitada)){
                case 1:
                    resp == 1
                    console.log("\nO valor em Farenheit é:",converteCparaF());
                    leitor.close();
                break 
                
                case 2:
                    resp == 2
                    console.log("\nO valor em Celsius é:",converteFparaC());
                    leitor.close();

                break;
                
                case 3:
                    resp == 3
                    console.log("Você encerrou o programa.");
                    leitor.close();

                break;

                default:
                    
                    console.log("\nDesculpe voce digitou uma opção inválida, porfavor, tente novamente")
                    leitor.close();
                break; 
        
        }})
   }


menu();

