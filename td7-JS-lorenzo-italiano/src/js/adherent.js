let nomNouveauAdherent = document.getElementById("nomAdherent");
let btnAjoutAdherent = document.getElementById("ajouterAdherent");
let listeAdherents = document.getElementById("listeAdherents");

btnAjoutAdherent.addEventListener("click", function () {
    if (nomNouveauAdherent.value.length > 0){
        let url = "php/ajouterAdherent.php?name=" + encodeURIComponent(nomNouveauAdherent.value);
        let requete = new XMLHttpRequest();
        requete.open("GET", url, true);
        requete.send(null);
    }
    nomNouveauAdherent.value = "";
    window.alert("Vous avez ajouté un nouvel adhérent !");
    getAllAdherent();
});

function getAllAdherent() {
    let url = "php/getAllAdherent.php";
    let requete = new XMLHttpRequest();
    requete.open("GET", url, true);
    requete.addEventListener("load", function () {
        let result = JSON.parse(requete.responseText);
        let ul = document.createElement("ul");

        Array.prototype.forEach.call(result, val =>{
            let li = document.createElement("li");
            li.innerText = val.idAdherent + "-" + val.nomAdherent;
            if (val.nbEmprunts>0 && val.nbEmprunts<2){
                li.innerText += "(" + val.nbEmprunts +" emprunt)";
            }
            else if (val.nbEmprunts>1){
                li.innerText += "(" + val.nbEmprunts + " emprunts)";
            }
            li.addEventListener("click", function () {
                let url = "php/getListEmprunts.php?id=" + encodeURIComponent(val.idAdherent);
                let req = new XMLHttpRequest();
                req.open("GET", url, true);
                req.addEventListener("load", function () {
                   let txt = val.nomAdherent + " a " + val.nbEmprunts + " emprunts en ce moment: \n";
                   let rep = JSON.parse(req.responseText);
                   Array.prototype.forEach.call(rep, r => {
                       txt+= "- " + r.titreLivre + "\n";
                   });
                   window.alert(txt);
                });
                req.send(null);
            });
            ul.appendChild(li);

        });
        listeAdherents.innerText = "";
        listeAdherents.appendChild(ul);


    });
    requete.send(null);
}

window.addEventListener("load", function () {
    getAllAdherent();
});