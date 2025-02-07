/*7.	Desenvolver uma estrutura modular com uma função que recebe através de parâmetro um número inteiro e retorna o fatorial deste número.*/

let numero = 0;

numero = Number(prompt('digite um numero:'));

console.log(fatorial(numero));

function fatorial(valor){
    let resultado = 1;
    for (let contador = valor; contador > 0; contador--){
        resultado *= contador;
    }
    return resultado;
}