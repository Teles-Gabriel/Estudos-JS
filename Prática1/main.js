function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if( hora >= 0 && hora < 12) {
        //Bonjour
        img.src = 'fotos/fotomanha.png'
        document.body.style.background= '#D2DEC8'
    } else if (hora >=12 && hora < 18) {
        //Boa tarde
        img.src = 'fotos/fototarde.png'
        document.body.style.background= '#FE8E0A'
    } else {
        //Boa noite
        img.src = 'fotos/fotonoite.png'
        document.body.style.background= '#1B2740'

    }
}