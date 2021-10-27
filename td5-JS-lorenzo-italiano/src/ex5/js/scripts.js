let xhr = new XMLHttpRequest();
let div_verbes = document.getElementById("liste_verbes");
let div_input = document.getElementById("input");
let url = "https://webinfo.iutmontp.univ-montp2.fr/~italianol/JS/TD/td5-lorenzo-italiano/src/ex5/php/recherche.php";

document.body.onload = creer_interface;

function creer_interface() {
div_input.innerHTML += "<input type=\"text\" id=\"inputseq\" placeholder=\"entrez une séquence\">\n" + "<br>" +
    "<input type=\"button\" class=\"lettre\" value=\"a\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"b\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"c\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"d\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"e\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"f\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"g\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"h\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"i\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"j\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"k\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"l\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"m\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"n\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"o\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"p\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"q\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"r\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"s\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"t\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"u\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"v\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"w\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"x\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"y\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"z\">\n" +
    "<input type=\"button\" class=\"lettre\" value=\"Œ\">\n" + "<br>" +
    "<input type=\"button\" id=\"effacer\" value=\"effacer la liste\">";

    let lettre = document.getElementsByClassName("lettre");
    let inputseq = document.getElementById("inputseq");


    Array.prototype.forEach.call(lettre, child => {
      child.addEventListener("click", function () {
        charger_verbes(child.value, 'init')
      })
    });

inputseq.addEventListener("input", function () {
  charger_verbes(inputseq.value,'seq');
});

document.getElementById("effacer").addEventListener("click", function () {
    div_verbes.innerHTML="";
    inputseq.value = "";
});

}

function callback_basique() {
  let xhrJSON = JSON.parse(xhr.responseText);
  console.log(xhrJSON);
}

function callback() {
    let xhrJSON = JSON.parse(xhr.responseText);
    div_verbes.innerHTML = "";
    xhrJSON.forEach(item => {
        div_verbes.innerHTML += "<p>" + item.libelle +"</p>";
    })
}

function charger_verbes(lettre,type) {
  xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
        }
    };
  xhr.send("lettre="+encodeURIComponent(lettre)+"&"+"type="+ encodeURIComponent(type));
  xhr.addEventListener("load",callback);
}
