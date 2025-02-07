let matriz = [];
let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0;

for (let linha = 0; linha < 5; linha++){
    matriz[linha] = [];
    for (let coluna = 0; coluna < 3; coluna++){
        matriz[linha][coluna] = prompt('Digite a quantidade de estoque do produto ' + Number(linha+1));
    }
}

for (let linha = 0; linha < 5; linha++){
    for (let coluna = 0; coluna < 4; coluna++){
       
        if (linha == 0){
            p1 += (matriz[linha][coluna] );
        }

        if (linha == 1){
            mp2 += (matriz[linha][coluna] );
        }

        if (linha == 2){
            p3 += (matriz[linha][coluna] );
        }

        if (linha == 3){
            p4 += (matriz[linha][coluna] );
        }

        if (linha == 4){
            p5 += (matriz[linha][coluna] );
        }
    }
}

console.table(notas);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);