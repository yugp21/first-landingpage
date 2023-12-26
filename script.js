let btnMode = document.querySelector("#mode");
let body = document.querySelector("body")
let footer = document.querySelector(".foot")
let cMode = "light"

btnMode.addEventListener("click", function(){
    if(cMode === "light"){
        cMode = "dark"
        console.log("you are in dark")
        body.style.backgroundColor = "#0a233d"
        footer.style.backgroundColor = "lightgreen"
        document.querySelector('h1').style.color = '#c06b41';
        document.querySelector('p').style.color = '#c06b41';
        btnMode.textContent = "Light"
        btnMode.style.color = "dodgerblue"
        btnMode.style.backgroundColor = "white"
    }
    else{
        cMode = "light"
        console.log("you are in light")
        body.style.backgroundColor = "rgba(3, 14, 43, 0.688)"
        footer.style.backgroundColor = "yellow"
        document.querySelector('h1').style.color = 'white';
        document.querySelector('p').style.color = 'white';
        btnMode.textContent = "Dark"
        btnMode.style.color = "white"
        btnMode.style.backgroundColor = "dodgerblue"
    }
})