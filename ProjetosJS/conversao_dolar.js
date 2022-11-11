let cotacao_dolar = 5.16
let valor_dolar = 35
let valor_real = 180



function conversor_dolar(){
    valor_convertido_dolar = (cotacao_dolar * valor_dolar)
    return valor_convertido_dolar;
}

//console.log(conversor_dolar())

function conversor_real(){
    valor_convertido_real = (valor_real / cotacao_dolar)
    return valor_convertido_real;
}

//console.log(conversor_real())

function menu(){
    console.log("*****Conversor de moedas*****")
    console.log("- Para converter o valor de $35,00 para real, digite 1")
    console.log("- Para converter o valor de R$180,00 para dólar, digite 2")
    console.log("- Para encerrar o programa digite 3")
    console.log("********************************************************")

    var readline = require("readline");
   
    
   
    let leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
    }); 

        leitor.question("Digite a opção escolhida: \n", (resposta_digitada) =>{
            let resp = resposta_digitada
            switch(Number(resposta_digitada)){
                case 1:
                    resp == 1
                    console.log("$35,00 coreespondem à R$",conversor_dolar(),);
                    leitor.close();
                break 
                
                case 2:
                    resp == 2
                    console.log("\nO R$180,00 correspondem à $",conversor_real());
                    leitor.close();

                break
                
                case 3:
                    resp == 3
                    console.log("Você encerrou o programa.");
                    leitor.close();

                break

                default:
                    
                    console.log("\nDesculpe voce digitou uma opção inválida, porfavor, tente novamente")
                    leitor.close();
                break
            
                }})
            }
    
    
    menu();
