// Geef de invoervelden een label-klasse als er tekst in staat


const loginButton = document.querySelector(".login-button");
loginButton.addEventListener("click", function (event) {
	event.preventDefault(); // Voorkomt dat het formulier wordt verzonden

	const username = document.querySelector(".username").value;
	const password = document.querySelector(".password").value;

	// Controleer of de gebruikersnaam en het wachtwoord overeenkomen met opgeslagen gegevens in localStorage
	const savedUsername = localStorage.getItem("username");
	const savedPassword = localStorage.getItem("password");
	if (username === savedUsername && password === savedPassword) {
		alert("Je bent succesvol ingelogd!");
		localStorage.setItem("isLoggedIn", "true");
		window.location.href = "/Dashboard/html/weerstation.html";
	} else {
		alert("Ongeldige gebruikersnaam of wachtwoord.");
	}
});

// Sla de inloggegevens op in localStorage
localStorage.setItem("username", "ad");
localStorage.setItem("password", "12");

// Voor als je wachtwoord bent vergeten
const forgotPassword = document.querySelector(".forgot-password");
forgotPassword.addEventListener("click", function (event) {
	event.preventDefault(); // Voorkomt dat de pagina wordt herladen

	const username = prompt("Voer je gebruikersnaam in:");
	if (username === localStorage.getItem("username")) {
		const newPassword = prompt("Voer je nieuwe wachtwoord in:");
		localStorage.setItem("password", newPassword);
		alert("Je wachtwoord is succesvol gewijzigd!");
	} else {
		alert("Gebruikersnaam is onjuist.");
	}
});


