var readline = require("readline"); //faz uma requisição de um módulo
   
    let leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout, //configura a entrada e saída de dados dos usuários
    }); 
    leitor.question("Digite seu peso em quilos: \n", (peso_digitado) =>{ //solicita que o usuário insira uma informação
            let peso = peso_digitado //declara a variável e o valor que ela vai receber
            if(peso != 0){ //estrutura condicional
                leitor.question("Digite sua altura em metros:\n", (altura_digita) =>{
                    let altura = altura_digita
                    if(altura != 0){
                        let Imc = peso / (altura ** 2)
                        Number(Imc)
                            if(Imc < 16){
                                console.log("O valor do seu IMC é",(Imc))
                                console.log("Classificação: Magreza Grau III")
                                leitor.question("Digite 1 para mulher e 2 para homem\n", (resposta_digita) =>{
                                    let resp = resposta_digita
                                    switch(Number(resposta_digita)){
                                        case 1: 
                                            resp == 1
                                            let altura_centimetros_mulher = altura*100
                                            let pesoidealmulher = 52 + (0.67 * (altura_centimetros_mulher - 152.4))
                                            let engordar_grau_III_mulher = pesoidealmulher - peso
                                            console.log("Seu peso ideal é", (pesoidealmulher))
                                            console.log("Você deve engordar", (engordar_grau_III_mulher), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                        case 2:
                                            resp == 2
                                            let altura_centimetros_homem = altura*100
                                            let pesoidealhomem = 52 + (0.75 * (altura_centimetros_homem - 152.4))                                           
                                            let engordar_grau_III_homem = pesoidealhomem - peso                                           
                                            console.log("Seu peso ideal é", (pesoidealhomem))
                                            console.log("Você deve engordar", (engordar_grau_III_homem), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                                                       }
                                });
                            }
                            else if((Imc > 16) && (Imc < 16.9)){
                                console.log("O valor do seu IMC é",(Imc))
                                console.log("Classificação: Magreza Grau II")
                            
                                leitor.question("Digite 1 para mulher e 2 para homem\n", (resposta_digita) =>{
                                    let resp = resposta_digita
                                    switch(Number(resposta_digita)){
                                        case 1:
                                            resp == 1
                                            let altura_centimetros_mulher = altura*100
                                            let pesoidealmulher = 52 + (0.67 * (altura_centimetros_mulher - 152.4))
                                            let engordar_grau_II_mulher = pesoidealmulher - peso                                            
                                            console.log("Seu peso ideal é", (pesoidealmulher))
                                            console.log("Você deve engordar", (engordar_grau_II_mulher), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                        case 2:
                                            resp == 2
                                            let altura_centimetros_homem = altura*100
                                            let pesoidealhomem = 52 + (0.75 * (altura_centimetros_homem - 152.4))                                            
                                            let engordar_grau_II_homem = pesoidealhomem - peso                                            
                                            console.log("Seu peso ideal é", (pesoidealhomem))
                                            console.log("Você deve engordar", (engordar_grau_II_homem), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                                                       }
                                });
                            }
                            else if((Imc > 17) && (Imc < 18.4)){
                                console.log("O valor do seu IMC é",(Imc))
                                console.log("Classificação: Magreza Nível I")
                                
                                leitor.question("Digite 1 para mulher e 2 para homem\n", (resposta_digita) =>{
                                    let resp = resposta_digita
                                    switch(Number(resposta_digita)){
                                        case 1:
                                            resp == 1
                                            let altura_centimetros_mulher = altura*100
                                            let pesoidealmulher = 52 + (0.67 * (altura_centimetros_mulher - 152.4))
                                            let engordar_grau_I_mulher = pesoidealmulher - peso                                            
                                            console.log("Seu peso ideal é", (pesoidealmulher))
                                            console.log("Você deve engordar", (engordar_grau_I_mulher), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                        case 2:
                                            resp == 2
                                            let altura_centimetros_homem = altura*100
                                            let pesoidealhomem = 52 + (0.75 * (altura_centimetros_homem - 152.4))                                       
                                            let engordar_grau_I_homem = pesoidealhomem - peso
                                            console.log("Seu peso ideal é", (pesoidealhomem))
                                            console.log("Você deve engordar", (engordar_grau_I_homem), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                                                       }
                                });
                            }
                            else if((Imc > 18.5) && (Imc < 24.9)){
                                console.log("O valor do seu IMC é",(Imc))
                                console.log("Classificação: Adequado")
                                leitor.close();
                            } 
                            else if((Imc > 25) && (Imc < 29.9)){
                                console.log("O valor do seu IMC é",(Imc))
                                console.log("Classificação: Pré Obeso")
                                
                                leitor.question("Digite 1 para mulher e 2 para homem\n", (resposta_digita) =>{
                                    let resp = resposta_digita
                                    switch(Number(resposta_digita)){
                                        case 1:
                                            resp == 1
                                            let altura_centimetros_mulher = altura*100
                                            let pesoidealmulher = 52 + (0.67 * (altura_centimetros_mulher - 152.4))
                                            let emagrecer_pre_obeso_mulher = peso - pesoidealmulher                                            
                                            console.log("Seu peso ideal é", (pesoidealmulher))
                                            console.log("Você deve emagrecer", (emagrecer_pre_obeso_mulher), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                        case 2:
                                            resp == 2
                                            let altura_centimetros_homem = altura*100
                                            let pesoidealhomem = 52 + (0.75 * (altura_centimetros_homem - 152.4))                                           
                                            let emagrecer_pre_obeso_homem = peso - pesoidealhomem                                            
                                            console.log("Seu peso ideal é", (pesoidealhomem))
                                            console.log("Você deve emagrecer", (emagrecer_pre_obeso_homem), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                                                       }
                                });
                            } 
                            else if((Imc > 30) && (Imc < 34.9)){
                                console.log("O valor do seu IMC é",(Imc))
                                console.log("Classificação: Obesidade Grau I")
                                leitor.question("Digite 1 para mulher e 2 para homem\n", (resposta_digita) =>{
                                    let resp = resposta_digita
                                    switch(Number(resposta_digita)){
                                        case 1:
                                            resp == 1
                                            let altura_centimetros_mulher = altura*100
                                            let pesoidealmulher = 52 + (0.67 * (altura_centimetros_mulher - 152.4))
                                            let emagrecer_grau_I_mulher = peso - pesoidealmulher                                            
                                            console.log("Seu peso ideal é", (pesoidealmulher))
                                            console.log("Você deve emagrecer", (emagrecer_grau_I_mulher), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                        case 2:
                                            resp == 2
                                            let altura_centimetros_homem = altura*100
                                            let pesoidealhomem = 52 + (0.75 * (altura_centimetros_homem - 152.4))                                        
                                            let emagrecer_grau_I_homem = peso - pesoidealhomem                                            
                                            console.log("Seu peso ideal é", (pesoidealhomem))
                                            console.log("Você deve emagrecer", (emagrecer_grau_I_homem), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                                                       }
                                });
                            } 
                            else if((Imc > 35) && (Imc < 39.9)){
                                console.log("O valor do seu IMC é",(Imc))
                                console.log("Classificação: Obesidade Grau II")
                                leitor.question("Digite 1 para mulher e 2 para homem\n", (resposta_digita) =>{
                                    let resp = resposta_digita
                                    switch(Number(resposta_digita)){
                                        case 1:
                                            resp == 1
                                            let altura_centimetros_mulher = altura*100
                                            let pesoidealmulher = 52 + (0.67 * (altura_centimetros_mulher - 152.4))
                                            let emagrecer_grau_II_mulher = peso - pesoidealmulher                                            
                                            console.log("Seu peso ideal é", (pesoidealmulher))
                                            console.log("Você deve emagrecer", (emagrecer_grau_II_mulher), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                        case 2:
                                            resp == 2
                                            let pesoidealhomem = 52 + (0.75 * (altura_centimetros_homem - 152.4))
                                            let altura_centimetros_homem = altura*100                                            
                                            let emagrecer_grau_II_homem = peso - pesoidealhomem                                            
                                            console.log("Seu peso ideal é", (pesoidealhomem))
                                            console.log("Você deve emagrecer", (emagrecer_grau_II_homem), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                                                       }
                                });
                            } 
                            else if(Imc >= 40){
                                console.log("O valor do seu IMC é",(Imc))
                                console.log("Classificação: Obesidade Grau III")
                                leitor.question("Digite 1 para mulher e 2 para homem\n", (resposta_digita) =>{
                                    let resp = resposta_digita
                                    switch(Number(resposta_digita)){
                                        case 1:
                                            resp == 1
                                            let altura_centimetros_mulher = altura*100
                                            let pesoidealmulher = 52 + (0.67 * (altura_centimetros_mulher - 152.4))
                                            let emagrecer_grau_III_mulher = peso - pesoidealmulher                                            
                                            console.log("Seu peso ideal é", (pesoidealmulher))
                                            console.log("Você deve emagrecer", (emagrecer_grau_III_mulher), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                        case 2:
                                            resp == 2      
                                            let altura_centimetros_homem = altura*100
                                            let pesoidealhomem = 52 + (0.75 * (altura_centimetros_homem - 152.4))                                      
                                            let emagrecer_grau_III_homem = peso - pesoidealhomem                                            
                                            console.log("Seu peso ideal é", (pesoidealhomem))
                                            console.log("Você deve emagrecer", (emagrecer_grau_III_homem), "para chegar no seu peso ideal")
                                            leitor.close();
                                        break
                                                                       }
                                });
                           
                            }             
                    }
                    else{
                        console.log("Valor inválido")
                        leitor.close();
                    } 
                });
            
            }
            else{
                console.log("Valor inválido")
                leitor.close();
            }
        });
        
    

        
