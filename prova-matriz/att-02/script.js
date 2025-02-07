/*2- Faça um programa que leia uma matriz 5x5 e exiba apenas os elementos que formam a cruz (linha do meio e coluna do meio)*/

let matriz = [];
let matriz2 = []

for (let linha = 0; linha < 5; linha++){
    matriz[linha] = [];
    for (let coluna =0; coluna < 5; coluna++){
        matriz[linha][coluna] = Number(Math.random() * 100);
    }
}

console.table(matriz);
console.log(matriz[2][0], matriz[2][1],matriz[2][2],matriz[2][3],matriz[2][4]);
console.log(matriz[0][2],matriz[1][2],matriz[2][2],matriz[3][2],matriz[4][2]);








