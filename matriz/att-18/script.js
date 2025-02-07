let notas = [];
let media1 = 0, media2 = 0, media3 = 0, media4 = 0, media5 = 0;

for (let linha = 0; linha < 5; linha++){
    notas[linha] = [];
    for (let coluna = 0; coluna < 4; coluna++){
        notas[linha][coluna] = prompt('Digite a nota do aluno ' + Number(linha+1));
    }
}

for (let linha = 0; linha < 5; linha++){
    for (let coluna = 0; coluna < 4; coluna++){
       
        if (linha == 0){
            media1 += (notas[linha][coluna] / 4);
        }

        if (linha == 1){
            media2 += (notas[linha][coluna] / 4);
        }

        if (linha == 2){
            media3 += (notas[linha][coluna] / 4);
        }

        if (linha == 3){
            media4 += (notas[linha][coluna] / 4);
        }

        if (linha == 4){
            media5 += (notas[linha][coluna] / 4);
        }
    }
}

console.table(notas);
console.log(media1);
console.log(media2);
console.log(media3);
console.log(media4);
console.log(media5);