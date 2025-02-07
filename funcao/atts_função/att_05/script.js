/*5.	Desenvolver uma estrutura modular com uma função que recebe através de parâmetro um número inteiro e retorna um valor booleano indicando se o número corresponde a um ano bissexto. Um ano é bissexto quando for divisível por 4 e não for divisível por 100. Também são bissextos os divisíveis por 400.*/

let numero = 0;

numero = parseInt(prompt('Digite o ano: '));

bissexto(numero);

function bissexto(valor){
    if (numero % 4 === 0 && numero % 100 !== 0 || numero % 400 === 0){
        console.log('Este ano é bissexto');
    } else {
        console.log('Este ano não é bissexto');
    }
}