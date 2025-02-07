/*1- Crie um programa que leia uma matriz 3x3 e calcule o produto dos elementos da segunda linha.*/

let matriz = [], somaLinha = 0;

for (let linha = 0; linha < 3; linha++){
    matriz[linha] = [];
    for (let coluna =0; coluna < 3; coluna++){
        matriz[linha][coluna] = Number(Math.random() * 100);
    }
}

for (let linha = 0; linha < 3; linha++){
    for (let coluna =0; coluna < 3; coluna++){
       if (linha == 1){
        somaLinha += matriz[1][coluna];

       }
    }
}

console.table(matriz);
console.log(somaLinha);