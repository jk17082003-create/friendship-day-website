console.log("💖 Friendship Website Started");

/* Start Adventure */

function startAdventure(){
    window.location.href = "page2.html";
}

/* Floating Hearts */

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["💖","💕","💗","💝","❤️"];

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },10000);

}

/* Hearts only on pages that use this script */

setInterval(createHeart,800);