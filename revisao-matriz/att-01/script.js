/*1- Imagine uma fábrica que produz diversos produtos e cada produto tem um preço de venda e um custo total de produção. O objetivo é calcular o lucro de cada produto, baseado em uma lista de preços de venda e custos de produção, e armazenar os resultados em uma matriz multidimensional.
Objetivo: Criar um código que calcule o lucro por unidade de cada produto e mostre os resultados.
Requisitos:
●	Usar uma matriz multidimensional, onde cada linha contém o preço de venda e o custo de produção de um produto.
●	Utilizar estrutura de repetição para percorrer as linhas e calcular o lucro.
●	Exibir o lucro de cada produto.
Exemplo:
●	Produto 1: Preço de venda = 50, Custo de produção = 30, Lucro = 50 - 30 = 20*/


/*let matriz = [];
let lucro1 = 0, lucro2 = 0, lucro3 = 0;

for (let linha = 0; linha < 3; linha++){
    matriz[linha] = [];
    for (let coluna = 0;coluna < 2; coluna++){
        matriz[linha][coluna] = prompt('Digite o valor de venda do produto e depois o custo de produção: ' + Number(linha + 1 ));
    }
}

for (let linha = 0; linha < 3; linha++){
    for (let coluna = 0;coluna < 2; coluna++){
        if (matriz[0][0] && matriz[0][1]){
            lucro1 = (matriz[0][0] - matriz[0][1])
        }

        if (matriz[1][0] && matriz[1][1]){
            lucro2 = (matriz[1][0] - matriz[1][1])
        }

        if (matriz[2][0] && matriz[2][1]){
            lucro3 = (matriz[2][0] - matriz[2][1])
        }
    }
}

console.log(matriz);

console.log('Produto 1: Preço de venda = ' + matriz[0][0] + ', Custo de produção = ' + matriz[0][1] +', Lucro = ' + lucro1);
console.log('Produto 2: Preço de venda = ' + matriz[1][0] + ', Custo de produção = ' + matriz[1][1] +', Lucro = ' + lucro2);
console.log('Produto 3: Preço de venda = ' + matriz[2][0] + ', Custo de produção = ' + matriz[2][1] +', Lucro = ' + lucro3);*/


let quantidadePodutos = 0;
let preoProdutos = [];

quantidadePodutos = parseInt(prompt('Digite a quantide de produtos a ser cadastrados: '))

for (let linha = 0; linha < quantidadePodutos; linha++){
    preoProdutos[linha] = [];
    preoProdutos[linha][0] = Number(prompt('digite o valor de venda ' + Number(linha + 1)));
    preoProdutos[linha][1] = Number(prompt('digite o valor de produção ' + Number(linha + 1)));
    console.log('Lucro é :' + Number(preoProdutos[linha][0] - preoProdutos[linha][1]));
}

console.table(preoProdutos);

