let autocomplete = document.getElementById("autocompletion");
let input = document.getElementById("ville");
let loading = document.getElementById("loading");
let requete = new XMLHttpRequest();
let meteotxt = document.getElementById("meteo");
let meteoicon = document.getElementById("meteoicon");
let selected = null;

function afficheVilles(tableau) {
	videVilles();
	autocomplete.style.borderWidth = "thin";
	Array.prototype.forEach.call(tableau,element => {
		let p = document.createElement("p");
	    p.innerText += element;
        autocomplete.appendChild(p);
    })
}

function videVilles() {
	autocomplete.style.borderWidth = "0";
	//autocomplete.innerHTML = "";
	let nbchild = autocomplete.childElementCount;
	for (let i = 0; i < nbchild; i++) {
		autocomplete.removeChild(autocomplete.firstChild);
	}
}

function requeteAJAX(stringVille,callback, startLoadingAction, endLoadingAction) {
	startLoadingAction();
	if(requete.readyState!==4){
		requete.abort();
	}
	let url = "php/requeteVille.php?ville=" + encodeURIComponent(stringVille);
	requete = new XMLHttpRequest();
	requete.open("GET", url, true);
	requete.addEventListener("load", function () {
		endLoadingAction();
		callback(requete);
	});
	requete.send(null);
}

function callback_1(req) {
	console.log(req);
}

function callback_2(req) {
	console.log(JSON.parse(req.responseText));
}

function callback_3(req) {
	let tab = JSON.parse(req.responseText);
	let tabVille = [];
	let length = tab.length;
	for (let i = 0; i < length; i++) {
		tabVille[i]=tab[i].name;
	}
	console.log(tabVille);
}

function callback_4(req) {
	let tab = JSON.parse(req.responseText);
	let tabVille = [];
	let length = tab.length;
	for (let i = 0; i < length; i++) {
		tabVille[i]=tab[i].name;
	}
	afficheVilles(tabVille);
}

function maRequeteAJAX(StringVille) {
	requeteAJAX(StringVille,callback_4, function () {
		loading.style.visibility = "visible";
	}, function () {
		loading.style.visibility = "hidden";
	});
}

input.addEventListener("input", function () {
	if (input.value.length>=2){
		let minuteur = setTimeout(maRequeteAJAX,200);
		maRequeteAJAX(input.value);
		clearTimeout(minuteur);
	}
});

autocomplete.addEventListener("click", function () {
	input.value = event.target.innerText;
	videVilles();
	meteo(input.value);
});

function meteo(name) {
	let url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(name) + "&appid=c81d0d74b695db8fa5d760efdf045abb&lang=fr";
	let requeteMeteo= new XMLHttpRequest();
	requeteMeteo.open("GET", url, true);
	requeteMeteo.addEventListener("load", function () {
		let tab = JSON.parse(requeteMeteo.responseText);

		meteoicon.src = "http://openweathermap.org/img/wn/"+ tab.weather[0].icon +"@2x.png";

		meteotxt.innerText = tab.weather[0].description;
		console.log(tab);
	});
	requeteMeteo.send(null);
}

window.addEventListener("keydown", function(event){
	let key = event.key;
	console.log(key);
	if (autocomplete.children.length > 0) {
		switch (key) {
			case 'ArrowDown':
				if (selected === null || selected === autocomplete.children.length - 1) {
					autocomplete.children[0].classList.add("selected");
					selected = 0;
					break;
				} else {
					autocomplete.children[selected].classList.remove("selected");
					selected++;
					autocomplete.children[selected].classList.add("selected");
					break;
				}
			case 'ArrowUp':
				if (selected === null || selected === 0) {
					selected = autocomplete.children.length - 1;
					autocomplete.children[selected].classList.add("selected");
					break;
				} else {
					autocomplete.children[selected].classList.remove("selected");
					selected--;
					autocomplete.children[selected].classList.add("selected");
					break;
				}
			case 'Enter':
				input.value = autocomplete.children[selected].innerHTML;
				videVilles();
				meteo(input.value);
				break;
		}
	}
});




