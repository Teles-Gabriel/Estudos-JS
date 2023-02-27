//window.prompt('Qual o seu nome?'); // Pergunta o nome da pessoa
/*
var nome = window.prompt('Qual é seu nome?'); //var nome recebe o valor 
window.alert('Seu nome é ' , + nome );
*/
/*
var n1 = Number.parseFloat(window.prompt('Digite um numero'));
// Number.parseFloat() converte o dado string para number
// Também é possível usar somente a declaração Number()
var n2 = Number.parseFloat(window.prompt('Digite outro número'));
var s = n1 + n2 ;
//window.alert('A soma dos valores é'+ ' ' + s);

// Para converter um Number para uma String com o comando String(n)
//  Ou usando n.toString()

// Uma alternativa para a concatenação é utilizar `` crases no lugar das aspas para a string
window.alert(`A soma dos valores é ${s}`);
*/
//Mostrar numero de letras

var nome = window.prompt('Qual o seu nome?');
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras`);
document.write(`seu nome em maiusculas é ${nome.toUpperCase()}`);
document.write(`seu nome em minusculas é ${nome.toLowerCase()}`);

/* Para converter numeros*/
/*
var N1= 1545.5;;
N1;
N1.toFixed(2);
N1.toLocaleString('pt-BR',{style:'currency',currency: BRL});*/