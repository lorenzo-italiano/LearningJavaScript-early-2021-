class Equipe {


    /*
    son nom ;
    son classement ;
    son nombre de points ;
    son nombre de matchs gagnés (pour enrichir l’affichage) ;
    son nombre de matchs nuls (idem) ;
    son nombre de matchs perdus (idem) ;
    son nombre de buts pour (les buts marqués) ;
    son nombre de buts contre (les buts encaissés) ;
    un nombre aléatoire entre 0 et 1 qui permettra de départager les ex-aequo.
*/


    constructor(nom) {
        this.nom = nom;
        this.classement = 0;
        this.nbMatchsGagne = 0;
        this.nbMatchsNuls = 0;
        this.nbMatchsPerdus = 0;
        this.nbButsMarques = 0;
        this.nbButsEncaisse = 0;
        this.nbAleatoire = Math.random();
    }

    /**
     * Compare deux équipes passées en argument selon les critères du classement.
     * Les équipes sont comparées selon leur nombre de points, puis en cas d'égalité selon leur différence de buts, puis en cas
     * d'égalité selon leur nombre de buts marqués. En cas d'égalité complète, elles sont départagées en fonction
     * de la valeur aléatoire générée à la création de chaque équipe.
     *
     * @param {Equipe} eq1 une équipe du championnat
     * @param {Equipe} eq2 une équipe du championnat
     * @return {Number} une valeur strictement négative si eq2 est devant eq1, une valeur strictement positive si
     * eq1 est devant eq2, 0 si eq1 === eq2.
     */
    static compare(eq1, eq2) {
        if (eq1===eq2){
            return 0;
        }
        if (eq2.nbPoints()!==eq1.nbPoints()){
            return eq2.nbPoints()-eq1.nbPoints();
        }
        if(eq2.differenceButs()!==eq1.differenceButs()){
            return eq2.differenceButs()-eq1.differenceButs();
            }
        if(eq2.nbButsMarques!==eq1.nbButsMarques){
            return eq2.nbButsMarques-eq1.nbButsMarques;
        }
        if(eq2.nbAleatoire!==eq1.nbAleatoire){
            return eq2.nbAleatoire-eq1.nbAleatoire;
        }else{
            return 0;
        }
    }

    affichage() {
        return this.classement + " " + this.nom + " " + this.nbPoints() + " " + this.nbMatchsGagne + " " + this.nbMatchsNuls +
            " " + this.nbMatchsPerdus + " " + this.nbButsMarques + " " + this.nbButsEncaisse + " " +
            this.differenceButs();
    }

    toHTML() {
        let aAfficher = [this.classement, this.nom, this.nbPoints(), this.nbMatchsGagnes, this.nbMatchsNuls,
            this.nbMatchsPerdus, this.nbButsPour, this.nbButsContre, this.differenceButs()];
        return aAfficher.map(s => `<td>${s}</td>`).join("");
        // Ou plus simplement
        // return `${this.classement}\t${this.nom}\t${this.nbPoints()}\t${this.nbMatchsGagnes}\t${this.nbMatchsNuls},
        //         ${this.nbMatchsPerdus}\t${this.nbButsPour}\t${this.nbButsContre}\t${this.differenceButs()}`;
    }

    miseAJour(nbButsMarques, nbButsEncaisses) {
        this.nbButsMarques += nbButsMarques;
        this.nbButsEncaisse += nbButsEncaisses;

        if (nbButsMarques>nbButsEncaisses){
            this.nbMatchsGagne+=1;
        }else if(nbButsMarques<nbButsEncaisses){
            this.nbMatchsPerdus+=1;
        }else{
            this.nbMatchsNuls+=1;
        }
    }

    differenceButs(){
        return (this.nbButsMarques-this.nbButsEncaisse);
    }

    nbPoints(){
        return (this.nbMatchsGagne*3) + (this.nbMatchsNuls);
    }

}
