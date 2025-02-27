document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const registerMessage = document.getElementById("register-message");
    const confirmationContainer = document.createElement("div");


    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            registerMessage.textContent = "Veuillez remplir tous les champs correctement.";
            registerMessage.style.color = "red";
            return;
        }

        const utilisateur = {
            nom: document.getElementById("nom").value.trim(),
            prenom: document.getElementById("prenom").value.trim(),
            email: document.getElementById("email").value.trim(),
            telephone: document.getElementById("telephone").value.trim(),
            adresse: document.getElementById("adresse").value.trim(),
            codePostal: document.getElementById("code_postal").value.trim(),
            password: document.getElementById("password").value.trim(),
        }

        const typeCompte = document.getElementById("typeCompte").value;


        try {
            console.log("Objet JSON envoyé :", utilisateur);
            const response = await fetch("http://localhost:8080/neobank/register?typeCompte=" + typeCompte, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(utilisateur),
            });
            console.log(response);

            const result = await response.json();
            handleResponse(result.message);
            
        } catch (error) {
            console.log(error);
            handleResponse("Une erreur est survenue. Veuillez réessayer plus tard.")
        }


    })


    function handleResponse(message) {
        
        // Masque le formulaire et affiche la confirmation
        form.style.display = "none"; // Cache le formulaire
        registerMessage.style.display = "none"; // Cache le message d'erreur s'il y en avait

        // Création du message de confirmation
        confirmationContainer.classList.add("container", "text-center", "d-flex", "justify-content-center", "align-items-center", "vh-100");
        confirmationContainer.innerHTML = `
            <div class="p-4 shadow-lg bg-white rounded">
                <h2 class="text-success">` + message + `</h2>
                <a href="connexion.html" class="btn btn-primary mt-3">Retour à l'accueil</a>
            </div>
        `;

        // Ajoute la confirmation dans le body
        document.body.appendChild(confirmationContainer);

        // Optionnel : Redirection automatique après 3 secondes
        setTimeout(() => {
            window.location.href = "connexion.html";
        }, 8000);
    
    }




});
