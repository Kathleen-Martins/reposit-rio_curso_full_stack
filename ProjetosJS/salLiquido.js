var readline = require("readline"); //faz uma requisição de um módulo
   
    let leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout, //configura a entrada e saída de dados dos usuários
    }); 
    leitor.question("Digite o salário base do funcionário: \n", (sal_Base) =>{
        let salBase = sal_Base
        if(salBase != 0){
            leitor.question("Digite o valor da gratificação:\n", (gratif) =>{
                let gratiff = gratif
                if(gratiff >= 0){
                    let salBruto = Number(salBase) + Number(gratiff)
                    
                    if(salBruto < 1000){
                        let IR = (salBruto * (20/100))
                        let salliq = salBruto - IR
                        console.log("O salário liquido do funcionário é:", (salliq))
                        
                    }
                    else if(salBruto > 1000){
                        let IR2 = (salBruto * (15/100))
                        let salliq2 = salBruto - IR2
                        console.log("O salário liquido do funcionário é:", (salliq2))
                        

                    }
                    leitor.close();

                }
                else{
                    console.log("Valor inválido!")
                    leitor.close();
                }
            });

        }
        else {
            console.log("Valor inválido!")
            leitor.close();
        }
    });