document.addEventListener("DOMContentLoaded", function() {
    // Vérification de la connexion
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let errorMessage = document.getElementById("error-message");
        

        // Vérification basique des identifiants (à remplacer par une base de données réelle)
        if (username === "admin" && password === "1234") {
            window.location.href = "home.html"; // Redirige vers une autre page (page d'accueil)
        } else {
            errorMessage.textContent = "Identifiant ou mot de passe incorrect !";
            errorMessage.style.color = "red";
        }
    });

    // Redirection vers la page d'inscription
    let registerLink = document.getElementById("registerLink");
    if (registerLink) {
        registerLink.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche l'ouverture d'un lien vide
            window.location.href = "formulaireInscription.html"; // Redirige vers la page d'inscription
        });
    }
});
