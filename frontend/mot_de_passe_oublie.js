document.addEventListener("DOMContentLoaded", function() {
    let passwordResetForm = document.getElementById("passwordResetForm");
    let confirmationMessage = document.getElementById("confirmationMessage");

    passwordResetForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        let email = document.getElementById("email").value;

        // Simuler l'envoi d'une requête au backend
        fetch("http://localhost:8080/api/auth/forgot-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            confirmationMessage.textContent = data.message;
            confirmationMessage.style.color = "green";
        })
        .catch(error => {
            confirmationMessage.textContent = "Une erreur s'est produite. Veuillez réessayer.";
            confirmationMessage.style.color = "red";
        });
    });
});
