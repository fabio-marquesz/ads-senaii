/*2.	Desenvolver uma estrutura modular com uma função que recebe através de parâmetro um número inteiro e retorna o valor absoluto (positivo) deste número.*/

let numero = 0;

numero = parseFloat(prompt('Digite um numero: '));

positivo(numero);

function positivo(valor){
    if (numero < 0){
        console.log (numero * -1);
    } else {
        console.log (numero);
    }
}