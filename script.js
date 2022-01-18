/*Atividade

Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

var num1 = 7;
var num2 = 8;
var resultado1 = num1 + num2;

function soma(){
    resultado = resultado1 > 10 || resultado1 < 20; 
    numComp = num1 == num2;
    console.log(resultado1,'\n',resultado,'\n',numComp,'\n');

    if (num1 == num2){
        console.log('Os numeros '+num1+' e '+num2+' são iguais.');
    } else {
        console.log('Os numeros '+num1+' e '+num2+' não são iguais.');
    }
    if (resultado = true) {
        console.log('Sua soma é de '+resultado1+', que é maior do que 10 e menor do que 20');
    } else {
        console.log('Sua soma é de '+resultado1+', que não é maior do que 10 e menor do que 20');
    }
}
soma(); */

/*function comparaNumeros(num1, num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

  if(saoIguais){
        return "São Iguais";
    }
    return "Não são iguais";

    return saoIguais ? "São iguais" : "Não são iguais";
}*/

//Realização abaixo com a explicação da Professora

function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return 'Defina dois numeros!';

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return primeiraFrase + segundaFrase;
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = ' não';
    }

    return 'Os numeros '+num1+' e '+num2+saoIguais+' são iguais.';
};

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma < 20;

    if(compara10) {
        resultado10 = 'maior'
    }
    if(compara20) {
        resultado20 = 'maior';
    }

    return ' Sua soma é '+ soma +' , que é '+ resultado10 +' que 10 e '+ resultado20 +' que 20.';
}
console.log(comparaNumeros(7, 8 ));