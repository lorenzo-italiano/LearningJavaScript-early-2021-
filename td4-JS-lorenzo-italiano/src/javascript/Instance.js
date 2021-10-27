class Instance {

    nbcoup;
    nbBienPlace;

    constructor() {
        this.instance = Array.from(Array(4), () => new Array(4));
        this.initialiserInstance();

        this.casevide = new Array(2);
        this.casevide[0]=3;
        this.casevide[1]=3;

        this.nbcoup = 0;

    }

    updateCaseVide(){
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if(this.instance[i][j]===null){
                    this.casevide[0]=i;//stock i en 0
                    this.casevide[1]=j;//stock j en 1
                }
            }
        }
    }

    melanger() {
        let listElements = new Array(15);
        for (let i = 0; i < 15; i++) {
            listElements[i] = i+1;
        }
        //let randomi = Math.floor(Math.random() * 4);
        //let randomj = Math.floor(Math.random() * 4);
        //this.instance[randomi][randomj]=null;

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if(this.instance[i][j]!==null){
                    let randomNb = Math.floor(Math.random() * listElements.length);
                    this.instance[i][j] = listElements[randomNb];
                    listElements.splice(randomNb,1);
                }
            }
        }
    }

    initialiserInstance(){
        this.instance[0][0]=1;
        this.instance[0][1]=2;
        this.instance[0][2]=3;
        this.instance[0][3]=4;

        this.instance[1][0]=5;
        this.instance[1][1]=6;
        this.instance[1][2]=7;
        this.instance[1][3]=8;

        this.instance[2][0]=9;
        this.instance[2][1]=10;
        this.instance[2][2]=11;
        this.instance[2][3]=12;

        this.instance[3][0]=13;
        this.instance[3][1]=14;
        this.instance[3][2]=15;
    }

    deplacer(direction){
        this.updateCaseVide();
        switch (direction) {
            case "haut":
                if (this.casevide[0]+1 <= 3){
                   this.instance[this.casevide[0]][this.casevide[1]]=this.instance[this.casevide[0]+1][this.casevide[1]];
                   this.instance[this.casevide[0]+1][this.casevide[1]]=null;
                   this.updateCaseVide();
                   this.nbcoup ++;
                }
                break;
            case "bas":
                if (this.casevide[0]-1 >= 0){
                    this.instance[this.casevide[0]][this.casevide[1]]=this.instance[this.casevide[0]-1][this.casevide[1]];
                    this.instance[this.casevide[0]-1][this.casevide[1]]=null;
                    this.updateCaseVide();
                    this.nbcoup ++;
                }
                break;
            case "droite":
                if (this.casevide[1]-1 >= 0){
                    this.instance[this.casevide[0]][this.casevide[1]]=this.instance[this.casevide[0]][this.casevide[1]-1];
                    this.instance[this.casevide[0]][this.casevide[1]-1]=null;
                    this.updateCaseVide();
                    this.nbcoup ++;
                }
                break;
            case "gauche":
                if (this.casevide[1]+1 <= 3){
                    this.instance[this.casevide[0]][this.casevide[1]]=this.instance[this.casevide[0]][this.casevide[1]+1];
                    this.instance[this.casevide[0]][this.casevide[1]+1]=null;
                    this.updateCaseVide();
                    this.nbcoup ++;
                }
                break;
        }
    }

    peutDeplacer(i,j){
        this.updateCaseVide();
        if(i+1<=3 && this.instance[i+1][j]===this.instance[this.casevide[0]][this.casevide[1]]){
            return "bas";
        }
        if(i-1 >= 0 && this.instance[i-1][j]===this.instance[this.casevide[0]][this.casevide[1]]){
            return "haut";
        }
        if(j+1<=3 && this.instance[i][j+1]===this.instance[this.casevide[0]][this.casevide[1]]){
            return "droite";
        }
        if(j-1 >= 0 && this.instance[i][j-1]===this.instance[this.casevide[0]][this.casevide[1]]){
            return "gauche";
        }
    }
}

