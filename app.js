// 1st Panel
let btn2=document.querySelector(".btn2");
let contSec=document.querySelector(".contSec");
let contFirst=document.querySelector(".contFirst");
let container=document.querySelector(".container");

    btn2.addEventListener("click", function(){
        setTimeout(() => {
            container.classList.add("hide");
            container2.classList.remove("hider");
            contSec.classList.add("pause1");
            contFirst.classList.add("pause1");
        }, 950);
        contSec.classList.add("ani");
        contFirst.classList.add("ani2");
        contSec.classList.remove("pause1");
        contFirst.classList.remove("pause1");
    });

// For second panel
let contSec2=document.querySelector(".contSec2");
let contFirst2=document.querySelector(".contFirst2");
let btn3=document.querySelector(".btn3");
let container2=document.querySelector(".container2");

    btn3.addEventListener("click", function(){
        setTimeout(() => {
            container2.classList.add("hider");
            container.classList.remove("hide");
            contSec2.classList.add("pause2");
            contFirst2.classList.add("pause2");
        },950);
        contFirst2.classList.add("ani4");
        contSec2.classList.add("ani3");
        contSec2.classList.remove("pause2");
        contFirst2.classList.remove("pause2"); 
    });