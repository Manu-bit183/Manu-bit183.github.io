let slide = 2
let audio1 = document.getElementById("AudioHTML1");


document.getElementById('tekst1').innerHTML = 'Je loopt in het bos want je bent daar aan het jagen op dieren, zonder dat je het doorhebt loop je in het gebied van het vervloekte kasteel Escapade Romoëro. Je ziet een wolf, schiet een peil en mist de wolf schrikt en rent weg. Je besluit de wolf te volgen de wolf gaat in de richting van de brug van het kasteel. Je volgt de wolf naar binnen je loopt door de deur en gaat naar binnen.'

function NextSlide() {
    if (slide == 2) {
        document.getElementById('tekst1').innerHTML = 'Opeens klappen de deuren hard dicht. Je probeert de deur open te maken, maar de deur gaat niet open. Je draait je om van de shock je ziet de kaarsen aan gaan éen voor éen de wolf is verdwenen. De ramen kunnen niet open en je kunt ze ook niet breken. Je kalmeert en besluit om de kasteel te onderzoeken of er nog een andere uitweg is in deze grote kasteel.'
    }
    else if (slide == 3) {
        document.getElementById('tekst1').innerHTML = 'Een grote deur gaat open. Je ziet de deur open gaan en achter de deur staat een doorzichtige figuur die je groet. Je schrikt ervan en valt op de grond. De geest legt je uit dat, als je het kasteel wil verlaten moet je een gouden sleutel hebben. Je schrikt door de geest, maar ziet dat hij geen kwade bedoelingen heeft. Je vraagt de geest hoe je het kasteel kan verlaat.'
    }
    else if (slide == 4) {
        document.getElementById('tekst1').innerHTML = 'Een vaas valt op de grond de geest loopt naar je toe die zul je bemachtigen alleen als je alle deuren bent langs geweest bent. Je kennis zal op proef gesteld worden. Kan jij alle puzzels oplossen of zal je ziel voor altijd hier verdwaalt raken. De geest verdwijnt je staat op van de grond je weet niet of de geest de waarheid zij , maar je hebt niet veel keuze dus moet je zijn worden wel vertrouwen '
    }
    else if (slide == 5) {
        window.location.assign("ER.html")
    }
    slide++
}