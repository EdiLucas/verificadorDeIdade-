function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 1955 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './img/homem-bebe.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', './img/homem-jovem.png')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', './img/homem-adulto.png')
            }
            else {
                //IDOSO
                img.setAttribute('src', './img/homem-idoso.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './img/mulher-bebe.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', './img/mulher-jovem.png')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', './img/mulher-adulto.png')
            }
            else {
                //IDOSO
                img.setAttribute('src', './img/mulher-idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}