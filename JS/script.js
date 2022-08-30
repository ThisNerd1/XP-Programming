let container = document.querySelector(".container");
let button = document.getElementById("spin");
let num = Math.ceil(Math.random()*10000);
let killer1 = document.querySelector("killer1");
let killer2 = document.querySelector("killer2");
let killer3 = document.querySelector("killer3");
let killer4 = document.querySelector("killer4");
let killer5 = document.querySelector("killer5");
let killer6 = document.querySelector("killer6");
let click = 0;
fighter1 = "";
figter2="";
let selectedKiller = document.querySelector("stopper");

button.onclick = function(){
    click ++;
    container.style.transform = "rotate(" + num + "deg)"
    num += Math.ceil(Math.random()*10000);
    if(selectedKiller == killer1){
        console.log("Freddie has been chosen");
    }else{
        console.log("not found");
    }

    if(click > 2){
        location.href = "SlasherFight.html";


    }
}