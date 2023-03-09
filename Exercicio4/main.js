function calcular() {

    var valor = document.querySelector(`input#valor1`)
    var res = window.document.querySelector(`div#res`)
    var vel = Number(valor.value)
    res.innerHTML = `<p>Sua velocide é de <strong>${vel}Km/h</strong></p>`

    if(vel > 60) {
        res.innerHTML += `Você está <strong>multado</strong> por excesso de velocidade`
    }

    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`

}