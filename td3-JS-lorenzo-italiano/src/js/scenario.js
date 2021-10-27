let jeu;  // variable globale représentant le jeu actuel
let score = document.getElementById("score");
let message = document.getElementById("message");
let champ = document.getElementById("champ");
let btnnouvellepartie = document.getElementById("lien")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function btn(event) {
    switch (event.key) {
        case 'ArrowLeft':
            jeu.personnage.deplacer(0,-1);
            miseAJour();
            break;
        case 'ArrowUp':
            jeu.personnage.deplacer(-1,0);
            miseAJour();
            break;
        case 'ArrowRight':
            jeu.personnage.deplacer(0,1);
            miseAJour();
            break;
        case 'ArrowDown':
            jeu.personnage.deplacer(1,0);
            miseAJour();
            break;
        case 'a':
            jeu.afficherMines();
            //setTimeout(this,1000);
            await sleep(1000);
            jeu.cacherMines();
            jeu.personnage.score -=50;
            miseAJour();
        default:
    }
}




/**
 * Met à jour la partie et l'affichage pour le joueur en fonction de la position du joueur
 * - indique si la partie est gagnée ou perdue
 * - indique le nombre de mines à proximité du joueur
 * - affiche le score du joueur
 * - met à jour l'image représentant le joueur
 */
function miseAJour() {
    score.innerText = jeu.personnage.score;
    jeu.personnage.majSprite(jeu.nbMinesVoisines());
    message.innerText = jeu.nbMinesVoisines();
    if (jeu.estGagne()){
        message.innerText = "Vous avez gagné !";
        document.removeEventListener("keydown", btn);
        jeu.afficherMines();
    }
    if (jeu.estPerdu()){
        message.innerText = "Vous avez perdu !";
        document.removeEventListener("keydown", btn);
        jeu.afficherMines();
    }
}


/**
 * Démarre une nouvelle partie
 */
function nouvellePartie() {
    champ.innerText = "";
    jeu = new Jeu(0.1);
    miseAJour();
    document.addEventListener("keydown", btn);
}


window.addEventListener("load", function () {
    nouvellePartie();
});

btnnouvellepartie.addEventListener("click", function () {
    nouvellePartie();
});