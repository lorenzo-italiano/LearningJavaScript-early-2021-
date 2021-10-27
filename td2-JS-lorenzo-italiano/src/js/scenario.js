// variables correspondant à des balises importantes
const listeEquipes = document.getElementById('liste-equipes');
const equipesEngagees = document.getElementById('equipes-engagees');
const boutonLancer = document.getElementById('lancer-championnat');
const boutonJourneeSuivante = document.getElementById('journee-suivante');
const boutonJouerJournee = document.getElementById('jouer-journee');
const blocEquipes = document.getElementById('bloc-equipes');
const blocJournee = document.getElementById('bloc-journee');
const blocClassement = document.getElementById('bloc-classement');
const numJournee = document.getElementById('num-journee');
const boutonPlus = document.getElementById('plus');
const boutonMoins = document.getElementById('moins');

// la variable tableau des nom des équipes par défaut
let tabNomEquipes = ["PSG", "ASM", "OM", "ASSE", "OL", "FCN", "EAG", "RCS"];

// la variable Championnat
let chp;

// Fonctions utiles
function afficher (element) {
    element.classList.remove("cache");
}

function cacher (element) {
    element.classList.add("cache");
}

// les styles d'affichages initiaux

// Blocs équipes, journée et classement
cacher(blocJournee);
cacher(blocClassement);

// div equipesEngagees et listeEquipes
cacher(equipesEngagees);

// les images plus et moins
cacher(boutonPlus);

// les boutons journée suivante et jouer journée
cacher(boutonJourneeSuivante);
cacher(boutonJouerJournee);

// on remplit les div des équipes engagées
for (let i = 1; i < 9; i++) {
    const input = document.getElementById("nom-eq" + i);
    input.value = tabNomEquipes[i-1];
}
equipesEngagees.innerHTML = "Équipes engagées : " + tabNomEquipes.join(" - ");

// programmation des gestions d'événements par des fonctions anonymes

// clic sur l'image plus
boutonPlus.addEventListener("click", function () {
    cacher(boutonPlus);
    afficher(boutonMoins);
    afficher(listeEquipes);
    cacher(equipesEngagees);
});

// clic sur l'image moins
boutonMoins.addEventListener("click", function () {
    for (let i = 1; i < 9; i++) {
        const input = document.getElementById("nom-eq" + i);
        tabNomEquipes[i-1] = input.value;
    }
    equipesEngagees.innerHTML = "Équipes engagées : " + tabNomEquipes.join(" - ")

    afficher(boutonPlus);
    cacher(boutonMoins);
    cacher(listeEquipes);
    afficher(equipesEngagees);
});

// clic sur le bouton lancer championnat
boutonLancer.addEventListener("click", function () {
    chp = new Championnat(tabNomEquipes.map(nom => new Equipe(nom)));
    chp.classerEquipes();
    chp.afficherClassement();
    numJournee.innerHTML = "Journée " + chp.numJournee;
    chp.afficherJournee();

    afficher(boutonJouerJournee);
    cacher(boutonJourneeSuivante);
    afficher(blocJournee);
    cacher(boutonJourneeSuivante);
    cacher(boutonLancer);
});

boutonJouerJournee.addEventListener("click", function () {
    chp.jouerJournee();
    chp.afficherJournee();
    cacher(boutonJouerJournee);
    if (chp.numJournee < 14) {
        afficher(boutonJourneeSuivante);
    }
    chp.classerEquipes();
    chp.afficherClassement();
});

boutonJourneeSuivante.addEventListener("click", function () {
    chp.numJournee += 1;
    chp.afficherJournee();
    numJournee.innerHTML = "Journée " + chp.numJournee;
    afficher(boutonJouerJournee);
    cacher(boutonJourneeSuivante);
});
