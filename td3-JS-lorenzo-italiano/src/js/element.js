class Element {

    champ = document.getElementById("champ");

    constructor(ligne, colonne, spriteURL) {
        this.ligne = ligne;
        this.colonne= colonne;
        this.spriteElement = document.createElement("img");
        this.spriteElement.classList.add("element");
        this.spriteElement.src = spriteURL;
        this.placer(ligne,colonne);
    }

    /**
     * Déplace l'élément à la position indiquée (et replace le sprite pour qu'il soit affiché au bon endroit)
     * @param ligne {Number} indice de la ligne où placer l'élément
     * @param colonne {Number} indice de la colonne où placer l'élément
     */
    placer(ligne, colonne) {
        this.ligne = ligne;
        this.colonne = colonne;
        let left = (51 + colonne*20) + "px";
        let top = (51 + ligne*20) + "px";
        this.spriteElement.style.top = top;
        this.spriteElement.style.left= left;
    }

    /**
     * Affiche l'élément
     * Ajoute l'élément (= la balise) dans le <div id="champ">
     */
    afficher() {
        this.champ.appendChild(this.spriteElement);
    }

    /**
     * Cache l'élément
     * Supprime l'élément du <div id="champ">
     */
    cacher() {
        this.champ.removeChild(this.spriteElement);
    }
}


class Tresor extends Element {
    constructor(colonne) {
        super(0,colonne,"img/tresor.png");
    }
}


class Mine extends Element {
    constructor(ligne, colonne) {
        super(ligne,colonne,"img/croix.png");
    }
}


class Personnage extends Element {
    constructor(colonne) {
        super(19,colonne,"img/personnage.png");
        this.score = 200;
    }

    /**
     * Exécute un déplacement du joueur horizontalement ou verticalement des valeurs passées en paramètre.
     * Si le déplacement est valide (le joueur ne sort pas de la grille 20x20), la position du personnage est modifiée
     * et le score est décrémenté de 1.
     *
     * Prérequis : exactement un des deux paramètres `dl` et `dc` est non nul, et sa valeur est 1 ou -1.
     * @param dl {Number} déplacement vertical du joueur (modifie la ligne)
     * @param dc {Number} déplacement horizontal du joueur (modifie la colonne)
     */
    deplacer(dl, dc) {
        if(this.ligne+dl<=19 && this.ligne+dl>=0 && dl!==0){
            this.ligne += dl;
            this.score--;
        }else if(this.colonne+dc<=19 && this.colonne+dc>=0 && dc!==0){
            this.colonne += dc;
            this.score--;
        }
        super.placer(this.ligne,this.colonne);
        this.afficher();
    }

    /**
     * Met à jour le sprite (= l'image) du personnage
     * On doit afficher l'image alternative si il y a une mine dans une case voisine
     * @param nbMinesVoisines {Number} nombre de mines dans les cases voisines
     */
    majSprite(nbMinesVoisines) {
        if(nbMinesVoisines===0){
            this.spriteElement.src = "img/personnage.png";
        }
        else{
            this.spriteElement.src ="img/personnage2.png";
        }
    }
}