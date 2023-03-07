//window.document.write('olá, mundo');
//window.document.write(window.document.URL);

var p1 = window.document.getElementsByTagName('p')[0]; // o numero entre colchetes acessa qual componente vc indica
//p1.style.color = 'blue' -- muda o style do documento
window.document.write(p1.innerText); //Pega o valor do texto dentro da tag do paragrafo 0

//window.alert(p1.innerHTML);

var d = window.document.getElementById('msg');
d.style.background='green';
d.innerText = 'estou aguardando';

var e = window.document.querySelector('div#msg'); //# id /. class

e.style.color = 'blue';