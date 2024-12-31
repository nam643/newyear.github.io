let envelope = new Audio("page-flip-47177.mp3")

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


for(let i=1;i<=100;i++){
    const x = getRandomIntInclusive(0, screen.availHeight);
    const y = getRandomIntInclusive(0, screen.availWidth);
    const dot = document.createElement("p")
    dot.setAttribute("id","dot"+i)
    const node = document.createTextNode(".")
    dot.appendChild(node);
    document.body.appendChild(dot)
    document.getElementById("dot"+i).style.top = y + "px"
    document.getElementById("dot"+i).style.left = x + "px"
}
let star = document.getElementById("star")
let rot = 1

setInterval(function(){
    star.style.transform = 'rotate(' + rot + 'deg)'
    rot=rot+5
},10)

let starX = 0;
let starY = 0;

let falling = setInterval(function(){
    starX = starX + 1;
    starY = starY + 1;
    star.style.top = starY/10 + "vh"
    star.style.left = starX/10 + "vh"
},2)

if(starX>screen.availWidth){
    clearInterval(falling)
}

star.onclick = function(){
    document.getElementById("envelope").style.opacity = 1
    envelope.play()
}

document.getElementById("envelope-close").onclick = function(){
    document.getElementById("envelope-close").style.display = "none"
    document.getElementById("wishes").style.display = "block"
    envelope.play()
}

document.getElementById("firework").onclick = function(){
    window.location.replace("firework.html")
}
