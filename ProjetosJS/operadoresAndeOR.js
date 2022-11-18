//variaveis
let a = 5
let b = 4
let c = 3
let d = 6
var num = 0
//menu incicial
console.log("Observe o valor de cada variável:")
console.log("a =",a)
console.log("b =",b)
console.log("c =",c)
console.log("d =",d)
console.log("*********************************")
console.log("Para as expressões apresentadas à seguir, digite 1 para verdadeiro e 2 para falso")
console.log("Obs: Cada resposta correta vale 1 ponto")
console.log("*********************************")

function expressao1(){
    let expr1 = (a > c) && (c <= d)
    console.log("Expressão nº 1: (a > c) && (c <= d)")

    var readline = require("readline");

    let leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
    }); 
        leitor.question("Digite a opção escolhida: \n", (resposta_digitada) =>{
            let resp = resposta_digitada
        if(expr1==true && resp==1){
            console.log("Essa expressão é verdadeira, você acertou")
            num++
            console.log("Você tem",num,"ponto");
        }
        else if(expr1==false && resp==2){
            console.log("Essa expressão é falsa, você acertou")
            num++
            console.log("Você tem",num,"ponto");
        }
        else if(expr1==false && resp==1){
            console.log("Essa expressao é falsa, você errou")
            console.log("Você tem",num,"ponto");
        }
        else if(expr1==true && resp==2){
            console.log("Essa expressao é verdadeira, você errou")
            console.log("Você tem",num,"ponto");
        
        }
        else{
            console.log("resposta invalida")
        }
        leitor.pause(10);
})}
expressao1();

function expressao2(){
    let expr2 = (a+b) > 10 || (a+b) == (c+d)
    console.log("Expressão nº 2: (a+b) > 10 || (a+b) == (c+d)")

    var readline = require("readline");

    let leia = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
    }); 
        leia.question("Digite a opção escolhida: \n", (resposta_digitada) =>{
            let resp = resposta_digitada
        if(expr2==true && resp==1){
            console.log("Essa expressão é verdadeira, você acertou")
            num++
            console.log("Você tem",num,"ponto");
        }
        else if(expr2==false && resp==2){
            console.log("Essa expressão é falsa, você acertou")
            num++
            console.log("Você tem",num,"ponto");
        }
        else if(expr2==false && resp==1){
            console.log("Essa expressao é falsa, você errou")
            console.log("Você tem",num,"ponto");
        }
        else if(expr2==true && resp==2){
            console.log("Essa expressao é verdadeira, você errou")
            console.log("Você tem",num,"ponto");
        
        }
        else{
            console.log("resposta invalida")
        }
        leia.pause(10);
})}
expressao2();

function expressao3(){
    let expr3 = (a>=c) && (d >= c)
    console.log("Expressão nº 3: (a>=c) && (d >= c)")

    var readline = require("readline");

    let leia = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
    }); 
        leia.question("Digite a opção escolhida: \n", (resposta_digitada) =>{
            let resp = resposta_digitada
        if(expr3==true && resp==1){
            console.log("Essa expressão é verdadeira, você acertou")
            num++
            console.log("Você tem",num,"ponto");
        }
        else if(expr3==false && resp==2){
            console.log("Essa expressão é falsa, você acertou")
            num++
            console.log("Você tem",num,"ponto");
        }
        else if(expr3==false && resp==1){
            console.log("Essa expressao é falsa, você errou")
            console.log("Você tem",num,"ponto");
        }
        else if(expr3==true && resp==2){
            console.log("Essa expressao é verdadeira, você errou")
            console.log("Você tem",num,"ponto");
        
        }
        else{
            console.log("resposta invalida")
        }
        leia.pause(10);
})}
expressao3();





