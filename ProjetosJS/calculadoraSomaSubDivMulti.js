let valor1 = 30
let valor2 = 10

function soma(){
    somaNumeros = valor1 + valor2
    return(somaNumeros);
}

function subtracao(){
    subtracaoNumeros = valor1 - valor2
    return(subtracaoNumeros);
}

function produto(){
    produtoNumeros = valor1 * valor2
    return(produtoNumeros);
}

function divisao(){
    divisaoNumeros = valor1 / valor2
    return(divisaoNumeros);
}

function menu(){
    console.log(valor1)
    console.log(valor2)
    console.log("Qual resultado para os números você deseja obter?")
    console.log(" 1 - soma\n 2- subtração\n 3-produto\n 4-divisao\n 5-encerrar programa\n ***************")

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
                console.log("O resultado da soma dos números é:",soma())
                leitor.close();
            break;
            case 2:
                resp == 2
                console.log("O resultado da subtração dos números é:",subtracao())
                leitor.close();
            break;
            case 3:
                resp == 3
                console.log("O resultado do produto dos números é:",produto())
                leitor.close();
            break;
            case 4:
                resp == 4
                console.log("O resultado da divisão dos números é:",divisao())
                leitor.close();
            break;
            case 5:
                resp == 5
                console.log("Programa encerrado")
                leitor.close();
            break;
            default:
                console.log("Opção inválida, tente novamente")
                leitor.close();
            break;

        }});
}

menu();

