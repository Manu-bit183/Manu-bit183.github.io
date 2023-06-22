let clicks = -1;
let flatcpc = 0;
let butt1cost = 10;
let buyclickeronecost = 3;
let autoclicker = 0;
let clicktimeout = 0;
let clickertimer = 0;
let clickertimerint = 0;
let clickergame = 0;
let clickergamegoal = 30;
let fotozien = document.getElementById("broodknop2").style.display = "none";
let code = '152120';
let showblok1 = document.getElementById("kleurblokid1").style.display = "none";
let showblok2 = document.getElementById("kleurblokid2").style.display = "none";
let showblok3 = document.getElementById("kleurblokid3").style.display = "none";

document.getElementById("linkbutt1cost").innerHTML = butt1cost;

document.getElementById("linkbuyclickeronecost").innerHTML = buyclickeronecost;

function clickergamebegin() {
    if (clickergame == 0) {
    clicks = 1;
    flatcpc = 0;
    butt1cost = 10;
    buyclickeronecost = 3;
    clearInterval(autoclicker);
    clearTimeout(clicktimeout);
    clicktimeout = setTimeout(clickergameend, 30000);
    document.getElementById("clicks").innerHTML = clicks;
    clickertimer = 30
    clearInterval(clickertimerint)
    clickertimerint = setInterval(clickergametimer, 100)
    document.getElementById("timeleft").innerHTML = clickertimer;

}
}

function clickergametimer() {
    clickertimer -= 0.1
    clickertimer = Math.round(clickertimer * 10) / 10
    document.getElementById("timeleft").innerHTML = clickertimer;
    if (clickertimer <= 0) {
        clearInterval(clickertimerint)
    }
}

function clickergameend() {
    clearInterval(autoclicker);
    clicks = -1;
    flatcpc = 0;
    butt1cost = 10;
    buyclickeronecost = 3;
    document.getElementById("clicks").innerHTML = 0;
}

function clickergamewon() {
    clearInterval(autoclicker);
    clearInterval(clickertimerint);
    clearTimeout(clicktimeout);
    clicks = -1;
    document.getElementById("clicks").innerHTML = 0;
    clickertimer = 0;
    clickergame = 1;
    document.getElementById("timeleft").innerHTML = clickertimer;
    document.getElementById("begin").style.backgroundColor = "red";
    console.log('Gewonnen');
    fotozien = document.getElementById("broodknop2").style.display = "initial";
    showblok2 = document.getElementById("kleurblokid2").style.display = "initial"
}

function butcookie() {
    if (clicks >= 0) {
        clicks += 1 + flatcpc;
        document.getElementById("clicks").innerHTML = clicks;
    }
    if (clicks >= clickergamegoal) {
        clickergamewon()
    }
}

function butt1() {
    if (clicks >= butt1cost) {
        clicks -= butt1cost;
        flatcpc += 1;
        butt1cost *= 1.20;
        butt1cost = Math.round(butt1cost);
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("linkbutt1cost").innerHTML = butt1cost;
    }
}

function clickerone() {
    if (clicks >= 0)
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    if (clicks >= clickergamegoal) {
        clickergamewon()
    }
}

function buyclickerone() {
    if (clicks >= buyclickeronecost) {
        clicks -= buyclickeronecost;
        buyclickeronecost *= 1.20;
        buyclickeronecost = Math.round(buyclickeronecost);
        autoclicker = setInterval(butcookie, 1000);
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("linkbuyclickeronecost").innerHTML = buyclickeronecost;
    }
}

function lol() {
    alert('Code is 152120')
}

function codecheck() {
    let ingevoerd = prompt('Wat is je code? (Het wachtwoord is 9 cijfers lang')
if (ingevoerd == code) {
    alert('Je hebt gewonnen!')
}
}

