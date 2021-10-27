class Journee {

    constructor(matchs) {
        this.tab = matchs;
        this.estJouee = false;
    }

    afficher() {
        let match1 = document.getElementById("match1");
        match1.innerText = this.tab[0].affichage();
        let match2 = document.getElementById("match2");
        match2.innerText = this.tab[1].affichage();
        let match3 = document.getElementById("match3");
        match3.innerText = this.tab[2].affichage();
        let match4 = document.getElementById("match4");
        match4.innerText = this.tab[3].affichage();
    }

    jouer() {
        for (let i = 0; i < 4; i++) {
            this.tab[i].jouer();
        }
        this.estJouee = true;
        this.afficher();
    }

}
