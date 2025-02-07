/*2- Uma fábrica monitora a temperatura de vários sensores durante cada dia de operação. O sistema precisa calcular a média de temperatura para cada dia de uma semana, onde cada linha de uma matriz contém as temperaturas de um dia (por exemplo, 7 sensores diferentes em um dia).
Objetivo: Criar um código que calcule a média de temperatura para cada dia utilizando matrizes multidimensionais e estrutura de repetição.
Exemplo:
●	Semana com 7 dias, 5 sensores de temperatura por dia.*/


let matriz = [], mediaTemperatura = [];
let quantideSensor = 0,somaTemperatura = 0;

quantideSensor = parseInt(prompt('Quantos sensores foram usados durante o dia? '));

for (let linha = 0; linha < 2; linha++){
    matriz[linha] = [];
    for (let coluna = 0; coluna < quantideSensor; coluna++){
        matriz[linha][coluna] = parseFloat(prompt(' No dia ' + Number(linha + 1) + ' qual foi  temperatra registrada no sensor: ' + Number(coluna + 1)));
        somaTemperatura += matriz[linha][coluna]
    }
    mediaTemperatura[linha] =somaTemperatura/quantideSensor;
    somaTemperatura = 0;
}

console.table(matriz);
console.log(mediaTemperatura)
