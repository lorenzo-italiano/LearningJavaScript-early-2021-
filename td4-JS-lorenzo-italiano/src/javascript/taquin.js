class taquin{

    nom;
    message = document.getElementById("message");
    estGagne = false;


    constructor(instaquin) {
        this.taquin = instaquin
        this.nom = "nombres";
    }


    adapterTaquin(nom){
        this.nom = nom;
        this.miseAjourTaquin();
        document.getElementById("photo16").src= 'img/' + this.nom + '/' + this.nom + '_' + 16 + '.jpg';
    }

    miseAjourTaquin(){
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const image = document.getElementById('photo'+ i + '' +j);
                if (this.taquin.instance[i][j]==null){
                    image.src = 'img/' + this.nom + '/' + this.nom + '_' + 15 + '.jpg';
                }
                else{
                    image.src = 'img/' + this.nom + '/' + this.nom + '_' + (this.taquin.instance[i][j]-1) + '.jpg';
                }
                image.title = '' + this.nom + i + '' + j;
                image.alt = '' + this.nom + i + '' + j;
            }
        }

        if (this.taquin.instance[0][0]===1 &&
        this.taquin.instance[0][1]===2 &&
        this.taquin.instance[0][2]===3 &&
        this.taquin.instance[0][3]===4 &&
        this.taquin.instance[1][0]===5 &&
        this.taquin.instance[1][1]===6 &&
        this.taquin.instance[1][2]===7 &&
        this.taquin.instance[1][3]===8 &&
        this.taquin.instance[2][0]===9 &&
        this.taquin.instance[2][1]===10 &&
        this.taquin.instance[2][2]===11 &&
        this.taquin.instance[2][3]===12 &&
        this.taquin.instance[3][0]===13 &&
        this.taquin.instance[3][1]===14 &&
        this.taquin.instance[3][2]===15){
            this.message.innerText="vous avez gagné en " + this.taquin.nbcoup + "coups";
            document.getElementById("photo33").src ='img/' + this.nom + '/' + this.nom + '_' + '.jpg';
            this.estGagne = true;
        }

        this.miseAjourBienPlace();

        this.message.innerText = "" + this.taquin.nbcoup + " coups, " + this.taquin.nbBienPlace + " bien placé";
    }

    miseAjourBienPlace(){
        this.taquin.nbBienPlace=0;

        if (this.taquin.instance[0][0]===1) this.taquin.nbBienPlace++;
        if (this.taquin.instance[0][1]===2) this.taquin.nbBienPlace++;
        if (this.taquin.instance[0][2]===3) this.taquin.nbBienPlace++;
        if (this.taquin.instance[0][3]===4) this.taquin.nbBienPlace++;

        if (this.taquin.instance[1][0]===5) this.taquin.nbBienPlace++;
        if (this.taquin.instance[1][1]===6) this.taquin.nbBienPlace++;
        if (this.taquin.instance[1][2]===7) this.taquin.nbBienPlace++;
        if (this.taquin.instance[1][3]===8) this.taquin.nbBienPlace++;

        if (this.taquin.instance[2][0]===9) this.taquin.nbBienPlace++;
        if (this.taquin.instance[2][1]===10) this.taquin.nbBienPlace++;
        if (this.taquin.instance[2][2]===11) this.taquin.nbBienPlace++;
        if (this.taquin.instance[2][3]===12) this.taquin.nbBienPlace++;

        if (this.taquin.instance[3][0]===13) this.taquin.nbBienPlace++;
        if (this.taquin.instance[3][1]===14) this.taquin.nbBienPlace++;
        if (this.taquin.instance[3][2]===15) this.taquin.nbBienPlace++;
    }



}