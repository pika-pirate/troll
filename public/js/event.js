var aqua = document.querySelector(".bl")
var img = document.querySelector("#water")
aqua.addEventListener (
    "mouseover", function(){
        img.classList.remove("hidden")
    }
)
img.addEventListener (
    "mouseover", function(){
        img.classList.add("hidden")
    }
)

var heure = document.querySelector("#chrono")
var div = document.querySelector("#vm")
heure.addEventListener (
    "mouseover",function(){
        div.classList.remove("hidden")
    }
)

div.addEventListener(
    "mouseover",function(){
        div.classList.add("hidden")
    }
)

var sky = document.querySelector(".br")
var gif = document.querySelector("#sky")
sky.addEventListener(
    "mouseover",function(){
        gif.classList.remove("hidden")
    }
)
gif.addEventListener(
    "mouseover",function(){
        gif.classList.add("hidden")
    }
)