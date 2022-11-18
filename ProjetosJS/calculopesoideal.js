function pesoideal(){
    var readline = require("readline");
   
    let leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
    });
        leitor.question("Digite 1 para Mulher e 2 para homem:\n", (resposta_digittada) =>{
            resp = resposta_digittada
            switch(Number(resposta_digittada)){
                case 1:
                    resp == 1
                    leitor.question("Digite sua altura em centimetros:\n", (hm) =>{
                        Number(hm)
                        pesoidealmulher = 52 + (0.67 * (hm - 152.4))
                        console.log("Seu peso ideal é", (pesoidealmulher))
                        leitor.close();
                    });
                break
                case 2:
                    resp == 2
                    leitor.question("Digite sua altura em centimetros:\n", (hh) =>{
                        Number(hh)
                        pesoidealhomem = 52 + (0.75 * (hh - 152.4))

                        console.log("Seu peso ideal é: ", (pesoidealhomem))
                        leitor.close();
                    });
                break
                default:
                    console.log("resposta inválda")
                    leitor.question();
                break

            }
        });
    }
pesoideal();
