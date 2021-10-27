class Match {

    constructor(equipe1, equipe2) {
        this.equipe1 = equipe1;
        this.equipe2 = equipe2;
        this.nbButs1 = 0;
        this.nbButs2 = 0;
        this.estJoue = false;
    }

    jouer() {
        this.estJoue = true;
        //le +0.5 modélise l'avantage de l'équipe1 qui joue a domicile
        this.nbButs1 = Math.floor((Math.random()*5) + 0.5);
        this.nbButs2 = Math.floor(Math.random()*5);
        this.equipe1.miseAJour(this.nbButs1,this.nbButs2);
        this.equipe2.miseAJour(this.nbButs2,this.nbButs1);
    }

    affichage() {
        return this.equipe1.nom + "  " + this.nbButs1 + " - " + this.nbButs2 + "  " + this.equipe2.nom;
    }

}
