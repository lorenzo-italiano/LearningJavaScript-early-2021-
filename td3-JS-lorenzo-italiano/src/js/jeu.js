class Jeu {

    champ = document.getElementById("champ");

    constructor(probaMine) {
        this.tresor = new Tresor(Math.floor(Math.random() * 20));
        this.personnage = new Personnage(Math.floor(Math.random() * 20));

        this.carte = Array.from(Array(20), () => new Array(20));
        for (let i = 0; i < this.carte.length; i++) {
            for (let j = 0; j < this.carte.length; j++) {
                let prob = Math.random();
                if (prob<=probaMine){
                    this.carte[i][j] = true;
                }
            }
        }
        let tresorcolonne= this.tresor.colonne;
        let persocolonne= this.personnage.colonne;
        this.carte[0][tresorcolonne]=false;
        this.carte[0][tresorcolonne+1]=false;
        this.carte[0][tresorcolonne-1]=false;
        this.carte[1][tresorcolonne]=false;
        this.carte[19][persocolonne]= false;
        this.carte[19][persocolonne-1]=false;
        this.carte[19][persocolonne+1]=false;
        this.carte[18][persocolonne]=false;
        this.tresor.afficher();
        this.personnage.afficher();
    }

    /**
     * Affiche toutes les mines
     */
    afficherMines() {
        for (let i = 0; i < this.carte.length; i++) {
            for (let j = 0; j < this.carte.length; j++) {
                if (this.carte[i][j]===true){
                    let a = new Mine(i,j);
                    a.afficher();
                }
            }
        }
    }

    /**
     * Cache toutes les mines
     */
    cacherMines() {
        this.champ.innerText = "";
        this.personnage.afficher();
        this.tresor.afficher();
    }

    /**
     * Renvoie le nombre de mines voisines de la position courante du joueur
     * @returns {number} nombre de mines adjacentes à la position du joueur
     */
    nbMinesVoisines() {
        let cpt = 0;
        let colonne = this.personnage.colonne;
        let ligne = this.personnage.ligne;
        if (ligne+1<=19 && this.carte[ligne+1][colonne]=== true){
            cpt++;
        }
        if (ligne-1>=0 && this.carte[ligne-1][colonne]=== true){
            cpt++;
        }
        if (colonne+1<=19 && this.carte[ligne][colonne+1]=== true){
            cpt++;
        }
        if (colonne-1>=0 && this.carte[ligne][colonne-1]=== true){
            cpt++;
        }
        return cpt;
    }

    /**
     * Indique si le joueur a gagné la partie
     * @returns {boolean} true si le joueur a gagné (position sur le trésor)
     */
    estGagne() {
        return this.personnage.ligne === this.tresor.ligne && this.personnage.colonne === this.tresor.colonne;
    }

    /**
     * Indique si le joueur a perdu la partie
     * @returns {boolean} true si le joueur est positionné sur une mine ou son score est <= 0
     */
    estPerdu() {
        return this.personnage.score <= 0 || this.carte[this.personnage.ligne][this.personnage.colonne] === true;
    }
}
