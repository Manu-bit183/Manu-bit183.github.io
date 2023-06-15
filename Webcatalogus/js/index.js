console.log('Main JS loaded');
fetch('https://mbo-sd.nl/period3-fetch/music-event-013');
fetch('https://mbo-sd.nl/period3-fetch/music-event-afas-live');
fetch('https://mbo-sd.nl/period3-fetch/music-event-ziggo-dome');

createBootstrapCards();

function createBootstrapCards() {
    const resultElement = document.querySelector('.result');//deze querySelector linkt de result class in de html met JS

    fetch('https://mbo-sd.nl/period3-fetch/music-event-ziggo-dome')//deze fetch haalt alle informatie op
        .then(function (response) {
            return response.json();
        })
        .then(function (objecten) {
            console.log("Ontvangen objecten1:  ", objecten);

            const row = createBootstrapRow();

            //deze for loop maakt 3 cards aan en zet elke card in een bootstrap column. Aan het einde wordt de column toegevoegd aan de row.
            for (let i = 0; i < objecten.length; i++) {
                const ictObj = objecten[i];

                const column = createBootstrapColumn();

                const card = createBootstrapCard(ictObj.imageUrl, ictObj.title, ictObj.description);
                //voegt de card toe aan de column.
                column.appendChild(card);
                //voegt de column toe aan de row.
                row.appendChild(column);
            }

            //de row wordt toegevoegd aan het result element.
            resultElement.appendChild(row);

        });
};
function createBootstrapRow() {
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
};

//creates a bootstrap column with flex and aligned items stretch (so cards are equal in height).
function createBootstrapColumn() {
    const column = document.createElement('div');
    column.classList.add('col', 'd-flex', 'align-items-stretch');
    return column;
}


//creates a bootstrap 'card' and fills various 'card' classes with data provided from class.
function createBootstrapCard(imageUrl, cardTitle, cardDescription) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl//Haalt de image van fecth hier naar toe

    imgElement.style = "height:300px; object-fit: cover contain"//heeft de styling voor de images gedaan
    imgElement.classList.add('card-img-top');

    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');

    const cardBodyTitleElement = document.createElement('h4');
    cardBodyTitleElement.classList.add('card-title');
    cardBodyTitleElement.textContent = cardTitle;

    const cardBodyTextElement = document.createElement('p');
    cardBodyTextElement.classList.add('card-text');
    cardBodyTextElement.textContent = cardDescription;

    cardBodyElement.appendChild(cardBodyTitleElement);
    cardBodyElement.appendChild(cardBodyTextElement);

    cardElement.appendChild(imgElement);
    cardElement.appendChild(cardBodyElement);

    return cardElement;//returnt de cardElement terug naar het begin
}