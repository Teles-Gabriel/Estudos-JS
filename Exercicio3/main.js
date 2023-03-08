var a = window.document.getElementById("area");

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Event click'
    a.style.background = 'blue'
}

function entrar() {
    a.innerText = 'Event mouse on'
    a.style.background = 'red'
}

function sair() {
    a.innerText = 'mouse out'
    a.style.background = 'green'
}

function somar() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var resultado = window.document.getElementById('result')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    resultado.innerHTML = `O resultado é: ${n1} + ${n2} = ${s}`
}
