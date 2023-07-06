function verificar () {
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novament!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade =  ano - Number(fano.value)
        var gênero = '' 
        var img =  document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem' 
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe-homem.webp')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.webp')
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.webp')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.Homem.webp')
            }
            
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe-mulher.webp')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.webp')
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.webp')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-mulher.webp')
            }
        }
        res.style.textAligt = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(img) 
    }
}