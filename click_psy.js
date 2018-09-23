var bouton = document.getElementById('butt');
var body = document.querySelector('body');
var tabPara = document.querySelectorAll('p');

var selectHeading = document.querySelector('header');
var childsHeading = selectHeading.childNodes;


bouton.onclick = function(){
	bouton.className = "bouton_Psy";
	if(bouton.innerText === "Mode Normal"){
		bouton.innerText = "Mode Psychédélique";
		bouton.style.backgroundColor = "white";
		body.style.backgroundColor = "white";
		bouton.style.color = "black";

		for(var i=0; i<tabPara.length; i++){
			tabPara[i].style.color = "black";
		}
	}
	else{
		bouton.innerText = "Mode Normal";
		bouton.style.backgroundColor = "magenta";
		body.style.backgroundColor = "magenta";
		
		for(var i=0; i<tabPara.length; i++){
			tabPara[i].style.color = "blue";
		}
		bouton.style.color = "white";
		heading.style.color = "white";
	}

};

