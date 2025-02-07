function oi (nome){
    console.log('oi ' + nome);
}

oi('Fabio');


function declarativa (){
    console.log ('Função declarativa')
}
declarativa();


function expressa (nome){
    return 'oi ' + nome;
}
console.log (expressa('Fabio'));


function soma (a,b){
    let conta;
    conta = a + b;
    return conta;
}

let resultado = soma(1,2);
console.log(resultado);