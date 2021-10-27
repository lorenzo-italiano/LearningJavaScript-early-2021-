let titreNouveauLivre = document.getElementById("titreLivre");
let btnAjoutLivre = document.getElementById("ajouterLivre");
let listeLivresDisponibles = document.getElementById("listeLivresDisponibles");
let listeLivresEmpruntes = document.getElementById("listeLivresEmpruntes");

btnAjoutLivre.addEventListener("click", function () {
    if (titreNouveauLivre.value.length > 0){
        let url = "php/ajouterLivre.php?titre=" + encodeURIComponent(titreNouveauLivre.value);
        let requete = new XMLHttpRequest();
        requete.open("GET", url, true);
        requete.send(null);
    }
    titreNouveauLivre.value = "";
    window.alert("Vous avez ajouté un nouveau livre !");
    getLivresDispos();
});

function getLivresDispos() {
    let url = "php/getLivresDispos.php";
    let requete = new XMLHttpRequest();
    requete.open("GET", url, true);
    requete.addEventListener("load", function () {
        let result = JSON.parse(requete.responseText);
        let ul = document.createElement("ul");

        Array.prototype.forEach.call(result, val =>{
            let li = document.createElement("li");
            li.innerText = val.idLivre + "-" + val.titreLivre;
            li.addEventListener("click", function () {
                let rep = window.prompt("Prêt de \"" + val.titreLivre + "\"\n n° de l'emprunteur ?");
                if (!(rep === null) && !(rep === "")) {
                    let url = "php/emprunterLivre.php?livre=" + encodeURIComponent(val.idLivre) + "&adherent=" + encodeURIComponent(rep);
                    let requete = new XMLHttpRequest();
                    requete.open("GET", url, true);
                    requete.send(null);
                }
                getLivresEmprunt();
                getLivresDispos();
                getAllAdherent();
            });
            ul.appendChild(li);
        });
        listeLivresDisponibles.innerText = "";
        listeLivresDisponibles.appendChild(ul);
    });
    requete.send(null);
}

function getLivresEmprunt() {
    let url = "php/getLivresEmprunt.php";
    let requete = new XMLHttpRequest();
    requete.open("GET", url, true);
    requete.addEventListener("load", function () {
        let result = JSON.parse(requete.responseText);
        let ul = document.createElement("ul");

        Array.prototype.forEach.call(result, val =>{
            let li = document.createElement("li");
            li.innerText = val.idLivre + "-" + val.titreLivre;
            li.addEventListener("click", function () {
                if (window.confirm("Livre prêté à " + val.nomAdherent + ".\n Retour de ce livre ?")){
                    let url = "php/rendreLivre.php?idLivre=" + val.idLivre;
                    let req = new XMLHttpRequest();
                    req.open("GET", url, true);
                    req.send(null);
                    getLivresEmprunt();
                    getLivresDispos();
                    getAllAdherent();
                }
            });
            ul.appendChild(li);
        });
        listeLivresEmpruntes.innerText = "";
        listeLivresEmpruntes.appendChild(ul);
    });
    requete.send(null);
}

window.addEventListener("load", function () {
    getLivresDispos();
    getLivresEmprunt();
});