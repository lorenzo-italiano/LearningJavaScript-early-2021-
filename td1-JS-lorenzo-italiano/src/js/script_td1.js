 function adapterGalerie(nom) {
        for(let i = 1; i <= 6; i++) {
            const image = document.getElementById('fleur' + i);
            image.src = 'img/fleurs/' + nom + '/' + nom + i + '.jpg';
            // ou avec la syntaxe `` qui permet le remplacement de variables
            // image.src = `img/fleurs/${nom}/${nom}${i}.jpg`
            image.title = '' + nom + i;
            image.alt = '' + nom + i
            adapterTitre(nom);
        }
    }

function adapterTitre(nom){
    let titre = document.getElementById('titre');
    titre.innerText = tabTitres[nom];
 }

function cacher(im) {
    im.classList.remove('visible');
    im.classList.add('cachee');
}

function afficher(im){
    im.classList.remove('cachee');
    im.classList.add('visible');
}

function suivant(n){
    return (n%6) + 1;
}

function changeBanniereV1(){
    const tab = document.getElementsByClassName('visible');
    const banniereid = tab[0].id;
    const banniere = document.getElementById(banniereid);
    cacher(banniere);
    afficher(document.getElementById(suivant(banniereid)));
}

 function changeBanniereV2(){
     const tab = document.getElementsByClassName('visible');
     const banniereid = tab[0].id;
     const banniere = document.getElementById(banniereid);
     banniere.style.transition = "opacity 3s";
     cacher(banniere);
     let suiv = document.getElementById(suivant(banniereid));
     suiv.style.transition = "opacity 3s";
     afficher(suiv);
 }

 function stopperDefilement(){
     clearInterval(chb);
 }

 function lancerDefilement(){
    chb = setInterval(changeBanniereV2, 6000);
 }

 function construitInfobulle() {
     const info = document.createElement('div');
     info.innerHTML = "<p>c'est moi la bulle !</p>";
     info.id = "bulle";
     info.style.position = "fixed";
     info.style.top = "50%";
     info.style.right = "20%";
     info.style.backgroundColor = "grey";
     info.style.borderRadius = "30%";
     info.style.color = "white";
     document.body.appendChild(info);
 }

 function detruitInfobulle() {
     const info = document.getElementById('bulle');
     document.body.removeChild(info);
 }

function changerParametres(){
    let nb = Math.floor(Math.random() * 4) + 1;
    if(document.getElementsByTagName("body")[0].style.backgroundImage === "url(\"../src/img/background/bg-"+ nb + ".jpg\")"){
       let c = nb;
       while(nb == c){
           nb = Math.floor(Math.random() * 4) + 1;
       }
    }
    document.getElementsByTagName("body")[0].style.backgroundImage = 'url(../src/img/background/bg-' + nb +'.jpg)';
}

 let chb = setInterval(changeBanniereV2, 6000);
 const tabTitres = {
     'rose' : 'Galerie de roses',
     'hortensia': 'Galerie d\’hortensias',
     'fruitier': 'Galerie de fruitiers',
     'autre': 'Galerie de fleurs diverses'
 };

