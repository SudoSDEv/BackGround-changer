var color1=document.querySelector("#color1");
var color2=document.querySelector("#color2");
var body=document.getElementsByTagName("body")[0];
var h3=document.querySelector("h3");

function selectColor(){    
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    h3.innerHTML="CURRENT CSS BACKGROUND:<br>"+body.style.background;
    
}

color1.addEventListener("input",selectColor);
color2.addEventListener("input",selectColor);
