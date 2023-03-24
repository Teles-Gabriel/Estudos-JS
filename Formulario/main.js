function sim() {
    var enviar = window.document.querySelector('div#enviar')
    enviar.innerHTML = `<form action="https://formsubmit.co/gabrielteles0609@gmail.com" method="POST">`
    enviar.innerHTML += `<input type="hidden" name="_captcha" value="false">`
    enviar.innerHTML += `<input type="text" name="name" required>`
    enviar.innerHTML += `<button type="submit">Send</button>`
    enviar.innerHTML += `</form>`
}

$(document).ready(function(){
    $("#corpo").on("mousemove", "#nao", function(){


    var left = Math.floor(Math.random()*22)+"rem";
    var top = Math.floor(Math.random()*20)+"rem";

    $("#nao").css("margin-top", top);
    $("#nao").css("margin-left", left);
})
$("#corpo").on("click","#sim",function(){
    alert("S2-S2-S2");
})
});