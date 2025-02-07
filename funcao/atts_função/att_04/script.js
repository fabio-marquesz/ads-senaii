/*4.	Desenvolver uma estrutura modular com uma função que recebe através de parâmetro dois números inteiros e retorna um valor booleano indicando se o primeiro número é múltiplo do segundo.*/

let numero = [];

for (let contador = 0; contador < 2; contador++){
    numero[contador] = parseInt(prompt('Digite dois valores; '));
}

booleano(numero);

function booleano(valor){
    if (numero[0] % numero[1] == 0){
        console.log(numero[0] + ' é multiplo do ' + numero[1]);
    } else {
        console.log(numero[0] + ' não é multiplo do ' + numero[1]);
    }
}



