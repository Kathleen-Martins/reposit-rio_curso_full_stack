class calculocomissao{
    constructor(parametro2, parametro3, parametro4){
        
        this.quantVenda = parametro2;
        this.valorUnitPeca = parametro3;
        this.comissaoPercent = parametro4;
    }


    get retornaQuantVenda(){
        return this.quantVenda;
    }

    get retornavalorUnitPeca(){
        return this.valorUnitPeca;
    }

    get retornacomissaoPercent(){
        return this.comissaoPercent;
    }
}

let vendedorKatia = new calculocomissao(30,40,0.05)
let vendedorCarla = new calculocomissao(20,80,0.05)
let vendedorSandra = new calculocomissao(50,30,0.05)
let vendedorVania = new calculocomissao(50,30,0.05)

let calculacomissao = vendedorKatia.retornaQuantVenda*vendedorKatia.retornavalorUnitPeca*vendedorKatia.comissaoPercent
let calculacomissao2 = vendedorCarla.retornaQuantVenda*vendedorCarla.retornavalorUnitPeca*vendedorCarla.comissaoPercent
let calculacomissao3 = vendedorSandra.retornaQuantVenda*vendedorSandra.retornavalorUnitPeca*vendedorSandra.comissaoPercent
let calculacomissao4 = vendedorVania.retornaQuantVenda*vendedorVania.retornavalorUnitPeca*vendedorVania.comissaoPercent

function menu(){
    console.log("******A comissão de qual vendedor deseja exibir:*******\n")
    console.log("1- Katia\n")
    console.log("2- Carla\n")
    console.log("3- Sandra\n")
    console.log("4- Vania\n")
    console.log("0- Encerrar\n")
    console.log("*************\n")

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
                console.log("A vendedora Katia irá receber: R$",Number(calculacomissao))
                leitor.close();
            break;

            case 2:
                resp == 2
                console.log("A vendedora Carla irá receber: R$",Number(calculacomissao2))
                leitor.close();
            break;
            case 3:
                resp == 3
                console.log("A vendedora Sandra irá receber: R$",Number(calculacomissao3))
                leitor.close();
            break;
            case 4:
                resp == 4
                console.log("A vendedora Vania irá receber: R$",Number(calculacomissao4))
                leitor.close();
            break;
            case 5:
                resp == 5
                console.log("Programa encerrado")
                leitor.close();
            break;
            default:
                console.log("Informação inválida, tente novamente")
                leitor.close();
            break;
        }


        });

}

//console.log("Katia irá receber uma comissão de R$",Number(calculacomissao));
//console.log("Carla irá receber uma comissão de R$",Number(calculacomissao2));
//console.log("Sandra irá receber uma comissão de R$",Number(calculacomissao3));

menu();







