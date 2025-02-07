/*6.	Desenvolver uma estrutura modular com uma função que recebe através de parâmetro um número inteiro que corresponde a um mês do ano e retorna com o nome desse mês. Por exemplo, se o mês enviado for 1 a função deverá retorna janeiro, se o mês enviado for 2 a função deverá retornar fevereiro e assim por diante.*/

let numero = 0;

numero = parseInt(prompt('digite um numero:'));

mes(numero);

function mes(valor){
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    if (valor >= 1 && valor <= 12) {
        console.log(meses[valor - 1]);
    } else {
        console.log("Número inválido! Digite um número de 1 a 12.");
    }
}

