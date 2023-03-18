function verificar() {

    var numinit = document.getElementById('numinit');
    var numfin = document.getElementById('numfin');
    var pas = document.getElementById('passo');
    var res = document.getElementById('res');


    if (numinit.value.length == 0 || numfin.value.length == 0 || pas.value.length == 0) {
        window.alert('Preencha todos os campos')
    } else {
        res.innerHTML = 'Contando'
        inicio = Number(numinit.value)
        final = Number(numfin.value)
        passo = Number(pas.value)
        
        if(passo <= 0) {
            window.alert('o passo não pode ser 0')
            passo = 1
        }

        if( inicio < final) {
            for(let contador = inicio ; contador <= final; contador += passo) {
                res.innerHTML += `${contador} \u{1F97A}` // para colocar emoji U+1F979 	 o código padrão, para js usamos nesse modelo \u{1F979}
            }
        } else {
            for(let contador = inicio ; contador >= final ; contador -= passo) {
                res.innerHTML += `${contador} \u{1F97A}`
            }
        }
        res.innerHTML += `\u{1F979}`
        
    }  

}