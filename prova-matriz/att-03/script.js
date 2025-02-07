/*3- Fatura Mensal por Cliente:
Escreva um programa que leia as faturas de 6 clientes de uma empresa durante 3 meses, armazenadas em uma matriz 6x3. O programa deve calcular:
●	O total faturado por cliente.
●	O cliente que gerou a maior receita.
●	O mês de maior faturamento total.*/


let matriz = [], somaC1 = 0, somaC2 = 0, somaC3 = 0, somaC4 = 0,somaC5 = 0, somaC6 = 0, maiorfatura = 0, clienteReceita = 0, somaMes1 = 0, somaMes2 = 0, somaMes3 = 0, maiorMes = 0;

for (let linha = 0; linha < 6; linha++){
    matriz[linha] = [];
    for (let coluna =0; coluna < 3; coluna++){
        matriz[linha][coluna] = Number(Math.random() * 100);
    }
}

matriz [0][0] = parseFloat(prompt('Digite o valor da fatura do mes 1 do primeiro cliente:'));
matriz [0][1] = parseFloat(prompt('Digite o valor da fatura do mes 2 do primeiro cliente:'));
matriz [0][2] = parseFloat(prompt('Digite o valor da fatura do mes 3 do primeiro cliente:'));
somaC1 += matriz[0][0] + matriz[0][1] + matriz[0][2];
if (somaC1 > maiorfatura){
    maiorfatura += somaC1;
} 

matriz [1][0] = parseFloat(prompt('Digite o valor da fatura do mes 1 do segundo cliente:'));
matriz [1][1] = parseFloat(prompt('Digite o valor da fatura do mes 2 do segundo cliente:'));
matriz [1][2] = parseFloat(prompt('Digite o valor da fatura do mes 3 do segundo cliente:'));
somaC2 += matriz[1][0] + matriz[1][1] + matriz[1][2];
if (somaC2 > maiorfatura){
    maiorfatura += somaC2;
}

matriz [2][0] = parseFloat(prompt('Digite o valor da fatura do mes 1 do terceiro cliente:'));
matriz [2][1] = parseFloat(prompt('Digite o valor da fatura do mes 2 do terceiro cliente:'));
matriz [2][2] = parseFloat(prompt('Digite o valor da fatura do mes 3 do terceiro cliente:'));
somaC3 += matriz[2][0] + matriz[2][1] + matriz[2][2];
if (somaC3 > maiorfatura){
    maiorfatura += somaC3;
}

matriz [3][0] = parseFloat(prompt('Digite o valor da fatura do mes 1 do quarto cliente:'));
matriz [3][1] = parseFloat(prompt('Digite o valor da fatura do mes 2 do quarto cliente:'));
matriz [3][2] = parseFloat(prompt('Digite o valor da fatura do mes 3 do quarto cliente:'));
somaC4 += matriz[3][0] + matriz[3][1] + matriz[3][2];
if (somaC4 > maiorfatura){
    maiorfatura += somaC4;
}

matriz [4][0] = parseFloat(prompt('Digite o valor da fatura do mes 1 do quinto cliente:'));
matriz [4][1] = parseFloat(prompt('Digite o valor da fatura do mes 2 do quinto  cliente:'));
matriz [4][2] = parseFloat(prompt('Digite o valor da fatura do mes 3 do quinto  cliente:'));
somaC5 += matriz[4][0] + matriz[4][1] + matriz[4][2];
if (somaC5 > maiorfatura){
    maiorfatura += somaC5;
}

matriz [5][0] = parseFloat(prompt('Digite o valor da fatura do mes 1 do sexto cliente:'));
matriz [5][1] = parseFloat(prompt('Digite o valor da fatura do mes 2 do sexto cliente:'));
matriz [5][2] = parseFloat(prompt('Digite o valor da fatura do mes 3 do sexto cliente:'));
somaC6 += matriz[5][0] + matriz[5][1] + matriz[5][2];
if (somaC6 > maiorfatura){
    maiorfatura += somaC6;
}

if (somaC1 > somaC2  &&somaC1 > somaC3 && somaC1 > somaC4 && somaC1 > somaC5 && somaC1 > somaC6){
    clienteReceita = 1;
}

if (somaC2 > somaC1 && somaC2 > somaC3 &&somaC2 > somaC4 && somaC2 > somaC5 && somaC2 > somaC6){
    clienteReceita = 2;
}

if (somaC3 > somaC2 && somaC3 > somaC1 &&somaC3 > somaC4 && somaC3 > somaC5 && somaC3 > somaC6){
    clienteReceita = 3;
}

if (somaC4 > somaC1 && somaC4 > somaC2 &&somaC4 > somaC3 && somaC4 > somaC6 && somaC4 > somaC5 ){
    clienteReceita = 4;
}

if (somaC5 > somaC1 && somaC5 > somaC2 &&somaC5 > somaC3 && somaC5 > somaC4 && somaC5 > somaC6 ){
    clienteReceita = 5;
}

if (somaC6 > somaC1 && somaC6 > somaC2 &&somaC6 > somaC3 && somaC6 > somaC4 && somaC6 > somaC5 ){
    clienteReceita = 6;
}

somaMes1 +=  matriz[0][0] + matriz[1][0] + matriz[2][0] + matriz[3][0] + matriz[4][0] + matriz[5][0];

somaMes2 +=  matriz[0][1] + matriz[1][1] + matriz[2][1] + matriz[3][1] + matriz[4][1] + matriz[5][1];

somaMes3 +=  matriz[0][2] + matriz[1][2] + matriz[2][2] + matriz[3][2] + matriz[4][2] + matriz[5][2];


if (somaMes1 > somaMes2 && somaMes1 > somaMes3 && somaMes1 > maiorMes){
    maiorMes = 1;
}
if (somaMes2 > somaMes1 && somaMes2 > somaMes3 && somaMes2 > maiorMes){
    maiorMes = 2;
}
if (somaMes3 > somaMes2 && somaMes3 > somaMes1 && somaMes3 > maiorMes){
    maiorMes = 3;
}





console.table(matriz);
console.log('o total faturado do 1º cliente foi de: ', somaC1);
console.log('o total faturado do 2º cliente foi de: ', somaC2);
console.log('o total faturado do 3º cliente foi de: ', somaC3);
console.log('o total faturado do 4º cliente foi de: ', somaC4);
console.log('o total faturado do 5º cliente foi de: ', somaC5);
console.log('o total faturado do 6º cliente foi de: ', somaC6);
console.log('o cliente que gerou a maior receita foi o: ', clienteReceita);
console.log(somaMes1);
console.log(somaMes2);
console.log(somaMes3);
console.log(' o mes de maior fatura foi o ', maiorMes);


