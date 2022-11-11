let v1 = 35
let v2 = 50
let v3 = 80
let v4 = 160
let quadrado_v1 = (v1 ** 2)
let quadrado_v2 = (v2 ** 2)
let quadrado_v3 = (v3 ** 2)
let quadrado_v4 = (v4 ** 2)


function elevar_quadrado_v1(){
    quadrado_v1 = (v1 ** 2)
    return(quadrado_v1);
}

//console.log(elevar_quadrado_v1());

function elevar_quadrado_v2(){
    quadrado_v2 = (v2 ** 2)
    return(quadrado_v2);
}

//console.log(elevar_quadrado_v2());

function elevar_quadrado_v3(){
    quadrado_v3 = (v3 ** 2)
    return(quadrado_v3);
}

//console.log(elevar_quadrado_v3());

function elevar_quadrado_v4(){
    
    quadrado_v4 = (v4 ** 2)
    return(quadrado_v4);
}

//console.log(elevar_quadrado_v4());

function soma_quadrados(){
    resultado_quadrados = (quadrado_v1 + quadrado_v2 + quadrado_v3 + quadrado_v4)
    return(resultado_quadrados);
}

//console.log(soma_quadrados());

function menu(){
    console.log("Veja as opções disponíveis:")
    console.log(("v1 = "),Number(v1))
    console.log(("v2 = "),Number(v2))
    console.log(("v3 = "),Number(v3))
    console.log(("v4 = "),Number(v4))
    console.log("*******************************************************")
    console.log("******O que você deseja exibir******\n")
    console.log("1 - Resultado do quadrado de v1\n")
    console.log("2 - Resultado do quadrado de v2\n")
    console.log("3 - Resultado do quadrado de v3\n")
    console.log("4 - Resultado do quadrado de v4\n")
    console.log("5 - Resultado da soma dos quadrados\n")
    console.log("0 - Encerrar programa\n")
    console.log("*******************************************************")

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
                console.log("O resultado do quadrado de v1 é:" , elevar_quadrado_v1());
                leitor.close();
            break;
            case 2:
                resp == 2
                console.log("O resultado do quadrado de v2 é:" , elevar_quadrado_v2());
                leitor.close();
            break;
            case 3:
                resp == 3
                console.log("O resultado do quadrado de v3 é:" , elevar_quadrado_v3());
                leitor.close();
            break;
            case 4:
                resp == 4
                console.log("O resultado do quadrado de v4 é:" , elevar_quadrado_v4());
                leitor.close();
            break;
            case 5:
                resp == 5
                console.log("O resultado da soma dos quadrados é:" , soma_quadrados());
                leitor.close();
            break;
            case 0:
                resp == 0
                console.log("Programa encerrado");
                leitor.close();
            break;
            default:
                console.log("Opção invália, tente novamente")
                leitor.close();
            break;




        }});
    }

menu();
