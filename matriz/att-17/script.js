let matriz = [];
let matriz2 = [];

for (let linha = 0; linha < 3; linha++){
    matriz[linha] = [];
     for (let coluna = 0; coluna < 3; coluna++){
        matriz[linha][coluna] = parseInt((Math.random() * 10));
     }
}

for (let linha = 0; linha < 3; linha++){
    matriz2[linha] = [];
     for (let coluna = 0; coluna < 3; coluna++){
        matriz2[linha][coluna] = matriz[coluna][linha];
     }
}

console.table(matriz);
console.table(matriz2);