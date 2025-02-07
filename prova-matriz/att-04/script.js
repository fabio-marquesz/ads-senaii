/*4- Desenvolva um algoritmo que gere aleatoriamente uma matriz linhaxcoluna de inteiros e calcule a soma de todos os seus elementos positivos. Os valores linha e coluna são fornecidos pelo usuário.*/


let matriz = [], tamColuna = 0, tamlinha = 0, soma = 0;


tamColuna = Number(prompt('Digite a quantidade de colunas:'));
tamlinha = Number(prompt('Digite a quantidade de linhas:'));


for (let linha = 0; linha < tamlinha; linha++){
    matriz[linha] = [];
    for (let coluna =0; coluna < tamColuna; coluna++){
        matriz[linha][coluna] = Number(Math.random() * 100);
    }
}

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        soma += matriz[linha][coluna]; 
    }
}


console.table(matriz);
console.log(soma);