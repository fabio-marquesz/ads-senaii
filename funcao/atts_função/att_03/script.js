/*3.	Desenvolver uma estrutura modular com uma função que recebe através de parâmetro um número inteiro e retorna um valor booleano indicando se o número é par ou não.*/

let numero = 0;

numero = parseInt(prompt('Digite um valor: '));

booleano(numero)

function booleano(valor){
    if (numero % 2 == 0){
        console.log('Este numero é par');
    } else {
        console.log ('Este numero e impar');
    }
}