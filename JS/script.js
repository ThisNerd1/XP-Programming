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
killers = [1,2,3,4,5,6];
let selectedKiller = document.querySelector("stopper");

button.onclick = function(){
    click ++;
    num += Math.ceil(Math.random()*10000);
     container.style.transform = "rotate(" + num + "deg)"

     if (click> 2){
        location.href = "SlasherFight.html";

}
    
        if(selectedKiller == killers[1]){
            console.log("Freddie has been chosen");
        } else if (selectedKiller == killers[2]){
            console.log("Jeepers Creepers has been chosen");
        }
        else if (selectedKiller == killers[3]){
            console.log("Jason Voorhees has been chosen");
        }
        else if (selectedKiller == killers[4]){
            console.log("Xenomorphhas been chosen");
        }
        else if (selectedKiller == killers[5]){
            console.log("Micheal Myers has been chosen");
        }
        else if (selectedKiller == killers[6]){
            console.log("Regan MacNeil has been chosen");
        }
}
    