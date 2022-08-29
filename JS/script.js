let container = document.querySelector(".container");
let button = document.getElementById("spin");
let num = Math.ceil(Math.random()*10000);

button.onclick = function(){
    container.style.transform = "rotate(" + num + "deg)"
    num += Math.ceil(Math.random()*10000);

}