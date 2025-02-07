/*1.	Desenvolver uma estrutura modular com um procedimento que recebe através de parâmetro um número inteiro e apresenta a tabuada deste número.*/

let numero = 0;

numero = parseInt(prompt('Digite o númeo que deseja calcualr a tabuada'));

tabuada(numero); /* ESTA CHAMANDA A FUNÇÃO */

function tabuada (valor){ /* ESTA EXECUTANDO OQUE FOI FEITA PRA FAZER */
    for (let contador = 1; contador <= 10; contador++){
        let resultado = 0;
        resultado = valor * contador;
        console.log (contador + ' X ' + valor + ' = ' + resultado);
    }
}