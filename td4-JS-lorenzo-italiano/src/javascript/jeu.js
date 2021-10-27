let taq;
let caseid;
let i2;
let j2;
let btnsolution = document.getElementById("solution");
solution = document.getElementById("modele");
jeu = document.getElementById("jeu");
btnthemes = document.getElementById("themes");
btnmelanger = document.getElementById("melanger");

    function nouvellePartie(){
        let inst = new Instance();
        taq = new taquin(inst);
        document.addEventListener("keydown", btn);
        taq.taquin.melanger();
        taq.miseAjourTaquin();


        let caseid0 = document.getElementById("photo00");

        caseid0.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(0,0));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid0.addEventListener("mouseover", function () {
            i2 = Number(caseid0.id.slice(5,6));
            j2 = Number(caseid0.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid1 = document.getElementById("photo01");

        caseid1.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(0,1));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid1.addEventListener("mouseover", function () {
            i2 = Number(caseid1.id.slice(5,6));
            j2 = Number(caseid1.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid2 = document.getElementById("photo02");

        caseid2.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(0,2));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid2.addEventListener("mouseover", function () {
            i2 = Number(caseid2.id.slice(5,6));
            j2 = Number(caseid2.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid3 = document.getElementById("photo03");

        caseid3.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(0,3));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid3.addEventListener("mouseover", function () {
            i2 = Number(caseid3.id.slice(5,6));
            j2 = Number(caseid3.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid4 = document.getElementById("photo10");

        caseid4.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(1,0));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid4.addEventListener("mouseover", function () {
            i2 = Number(caseid4.id.slice(5,6));
            j2 = Number(caseid4.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid5 = document.getElementById("photo11");

        caseid5.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(1,1));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid5.addEventListener("mouseover", function () {
            i2 = Number(caseid5.id.slice(5,6));
            j2 = Number(caseid5.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid6 = document.getElementById("photo12");

        caseid6.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(1,2));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid6.addEventListener("mouseover", function () {
            i2 = Number(caseid6.id.slice(5,6));
            j2 = Number(caseid6.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid7 = document.getElementById("photo13");

        caseid7.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(1,3));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid7.addEventListener("mouseover", function () {
            i2 = Number(caseid7.id.slice(5,6));
            j2 = Number(caseid7.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid8 = document.getElementById("photo20");

        caseid8.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(2,0));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });
        caseid8.addEventListener("mouseover", function () {
            i2 = Number(caseid8.id.slice(5,6));
            j2 = Number(caseid8.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid9 = document.getElementById("photo21");

        caseid9.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(2,1));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });
        caseid9.addEventListener("mouseover", function () {
            i2 = Number(caseid9.id.slice(5,6));
            j2 = Number(caseid9.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid10 = document.getElementById("photo22");

        caseid10.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(2,2));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid10.addEventListener("mouseover", function () {
            i2 = Number(caseid10.id.slice(5,6));
            j2 = Number(caseid10.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid11 = document.getElementById("photo23");

        caseid11.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(2,3));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid11.addEventListener("mouseover", function () {
            i2 = Number(caseid11.id.slice(5,6));
            j2 = Number(caseid11.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid12 = document.getElementById("photo30");

        caseid12.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(3,0));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid12.addEventListener("mouseover", function () {
            i2 = Number(caseid12.id.slice(5,6));
            j2 = Number(caseid12.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid13 = document.getElementById("photo31");

        caseid13.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(3,1));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid13.addEventListener("mouseover", function () {
            i2 = Number(caseid13.id.slice(5,6));
            j2 = Number(caseid13.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid14 = document.getElementById("photo32");
        caseid14.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(3,2));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });

        caseid14.addEventListener("mouseover", function () {
            i2 = Number(caseid14.id.slice(5,6));
            j2 = Number(caseid14.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });

        let caseid15 = document.getElementById("photo33");

        caseid15.addEventListener("click", function () {
            taq.taquin.deplacer(taq.taquin.peutDeplacer(3,3));
            taq.miseAjourTaquin();
            taq.miseAjourBienPlace();
        });
        caseid15.addEventListener("mouseover", function () {
            i2 = Number(caseid15.id.slice(5,6));
            j2 = Number(caseid15.id.slice(-1));
            if(taq.taquin.casevide[0]-1 >= 0 &&  taq.taquin.instance[taq.taquin.casevide[0]-1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[0]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]+1][taq.taquin.casevide[1]]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]+1 <= 3 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]+1]===taq.taquin.instance[i2][j2] ||
                taq.taquin.casevide[1]-1 >= 0 && taq.taquin.instance[taq.taquin.casevide[0]][taq.taquin.casevide[1]-1]===taq.taquin.instance[i2][j2]){
                jeu.style.cursor= "pointer";
            }else{
                jeu.style.cursor = "not-allowed";
            }
        });




    }

    function btn(event) {
        switch (event.key) {
            case 'ArrowLeft':
                taq.taquin.deplacer("gauche");
                taq.miseAjourTaquin();
                if (taq.estGagne){
                    document.removeEventListener("keydown", btn);
                    btnmelanger.value="rejouer";
                }
                break;
            case 'ArrowUp':
                taq.taquin.deplacer("haut");
                taq.miseAjourTaquin();
                if (taq.estGagne){
                    document.removeEventListener("keydown", btn);
                    btnmelanger.value="rejouer";
                }
                break;
            case 'ArrowRight':
                taq.taquin.deplacer("droite");
                taq.miseAjourTaquin();
                if (taq.estGagne){
                    document.removeEventListener("keydown", btn);
                    btnmelanger.value="rejouer";
                }
                break;
            case 'ArrowDown':
                taq.taquin.deplacer("bas");
                taq.miseAjourTaquin();
                if (taq.estGagne){
                    document.removeEventListener("keydown", btn);
                    btnmelanger.value="rejouer";
                }
                break;
        }
    }

    function afficherSolution(){
        if (btnsolution.value==="solution"){
            solution.classList.remove('cacher');
            solution.classList.add('afficher');
            jeu.classList.remove('afficher');
            jeu.classList.add('cacher');
            btnsolution.value="puzzle";
            document.removeEventListener("keydown", btn);
            btnmelanger.disabled = true;

        }
        else if(btnsolution.value==="puzzle"){
            solution.classList.remove('afficher');
            solution.classList.add('cacher');
            jeu.classList.remove('cacher');
            jeu.classList.add('afficher');
            btnsolution.value="solution";
            document.addEventListener("keydown", btn);
            btnmelanger.disabled = false;
        }

    }

    btnsolution.addEventListener("click", afficherSolution);

    window.addEventListener("load", nouvellePartie);

    btnthemes.addEventListener("change",function () {
        taq.nom = btnthemes.value;
        taq.adapterTaquin(taq.nom);
    });

    btnmelanger.addEventListener("click", function () {
        if (btnmelanger.value==="mélanger"){
            taq.taquin.melanger();
            taq.miseAjourTaquin();
        }else{
            btnmelanger.value="mélanger";
            taq.taquin.melanger();
            taq.miseAjourTaquin();
            document.addEventListener("keydown", btn);
        }
    });

