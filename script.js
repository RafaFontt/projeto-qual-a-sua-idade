function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianço.jpg')
            } else if (idade < 38) {
                // Jovem
                img.setAttribute('src', 'imagens/moçoilo.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/homi.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/véio.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/criança.jpg')
            } else if (idade < 38) {
                // Jovem
                img.setAttribute('src', 'imagens/rapariga.jpg')
            } else if (idade < 60) {
                // Adulta
                img.setAttribute('src', 'imagens/mulhe.jpg')
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/véia.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}