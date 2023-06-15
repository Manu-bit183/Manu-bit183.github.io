const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", function (event) {
    event.preventDefault(); // Voorkomt dat het formulier wordt verzonden

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Voeg het bericht toe aan de chat
    const chat = document.getElementById("chat");
    chat.innerHTML += "<strong>" + name + ":</strong> " + message + "<br>";

    // Controleer het bericht op bepaalde vragen en woorden en reageer daarop met passende antwoorden + now.getDate()
    if (message.includes("hallo", "Hallo", "Hey", "hey", "He", "he")) {
        chat.innerHTML += "<strong>Chatbot:</strong> Hallo " + name + ", hoe kan ik je helpen?<br>";

    } else if (message.includes("weer", "Weer", "Wheater", "wheater")) {
        chat.innerHTML += "<strong>Chatbot:</strong> Het is momenteel 20 graden en zonnig.<br>";

    } else if (message.includes("How are you", "how are you", "How is your day", "how is your day")) {
        chat.innerHTML += "<strong>Chatbot:</strong> Hallo Hoe gaat het met youw op deze prachtige dag" + name + "<br>";

    } else if (message.includes("what", "What")) {
        chat.innerHTML += `<strong>Chatbot:</strong> What zijn jouw plannen voor vandaag. Ik heb wel what activiteiten what je kunt doen zoals: 1. Omarm het gevoel van verveling, 2. Bak iets lekkers.Verwen jezelf.Zoek een hobby, 3. Leer een nieuwe taal.Ga naar buiten , 4. Bel iemand op, 5. Volg een gratis cursus.<br>`;

    } else if (message.includes("hoe", "Hoe")) {
        chat.innerHTML += "<strong>Chatbot:</strong> Het gaat goed met mij met jouw.<br>";

    } else if (message.includes("tijd", "time", "klok", "Time", "Tijd")) {
        const now = new Date();
        chat.innerHTML += "<strong>Chatbot:</strong> Het is nu " + now.toLocaleTimeString() + ".<br>";

    } else {
        chat.innerHTML += "<strong>Chatbot:</strong> Sorry " + name + ", kunt uw dat nog een keer herhalen?.<br>";

    };


    // Maak het berichtveld leeg
    document.getElementById("message").value = "";
});