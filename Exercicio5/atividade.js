var agora = new Date() // para pegar a hora do sistema
var hora = agora.getHours // get hours
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12) {
    console.log('Bom dia!')
} else if(hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
