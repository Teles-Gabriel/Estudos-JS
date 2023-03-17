function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if( fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano -Number(fano.value);
        var genero = '';
        
        /* 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')      : cria uma tag de imagem com o id especifico pro html
        img.setAttribute('src', 'endereço da imagem') : é possivel utilizar diferentes atributos além dos mostrados nesse programa  
        */

        if(fsex[0].checked) {
            genero = 'Homem'
        } else if(fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}