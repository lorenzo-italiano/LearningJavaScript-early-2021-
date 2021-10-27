Exercice 1 :

1)
code de la ligne 1 à 12 : 
On initialise une variable $num_banniere aléatoirement entre 1 et 6 (a priori afin d'avoir une bannière aléatoire parmis
une liste de bannières).

Puis on initialise la variable $fleur au GET de la variable fleur si il existe, ou a défault, on l'initialise a la valeur
"rose".

ligne 26 :
Cette ligne sert a afficher la date en format heure/minutes/secondes où l'on a chargé la page.

ligne 31 :
La ligne 31 sert a afficher la bannière par rapport a notre variable $num_banniere qui est un chiffre aléatoire entre 1
et 6, celà va donc nous sortir une des 6 bannières aléatoirement.
 
lignes 48 à 55:

Ces lignes permettent d'afficher les images selon le contenu de la variable $fleur et d'afficher les fleurs correspondantes
(petite remarque : ce code n'est pas très adaptable, car si l'on veut rajouter une 7ième rose mais pas de 7ieme hortencia,
le code ne serait pas très beau).

2) Ce qui change lorsque l'on clique sur un item du menu, c'est le contenu de la variable $fleur .

Exercice 2:

3) plus rien ne fonctionne car la génération de la page dépend du php

9) document.getElementById('fleur' + i)  renvoie l'élement d'id fleurX où X est un numéro
image.src change la variable src de l'élement image selectionné.

Exercice 4 :

