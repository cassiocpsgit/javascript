function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sdc = window.document.getElementById('sdc')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 16
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/dia.png'
        document.body.style.backgroundColor = '#e2cd9f'
        sdc.innerText = `Bom Dia!`
    } else if (hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#b9846f'
        sdc.innerText = `Boa Tarde!`
    } else {
        img.src = 'img/noite.png'
        document.body.style.backgroundColor = '#515154'
        sdc.innerText = `Boa Noite!`
    }
}