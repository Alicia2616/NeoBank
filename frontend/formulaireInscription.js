document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const registerMessage = document.getElementById("register-message");
    const confirmationContainer = document.createElement("div");

    // form.addEventListener("submit", function (event) {
    //     event.preventDefault(); // Empêche le rechargement de la page

    //     // Vérifie si le formulaire est valide
    //     if (!form.checkValidity()) {
    //         form.classList.add("was-validated");
    //         registerMessage.textContent = "Veuillez remplir tous les champs correctement.";
    //         registerMessage.style.color = "red";
    //         return;
    //     }

    //     // Masque le formulaire et affiche la confirmation
    //     form.style.display = "none"; // Cache le formulaire
    //     registerMessage.style.display = "none"; // Cache le message d'erreur s'il y en avait

    //     // Création du message de confirmation
    //     confirmationContainer.classList.add("container", "text-center", "d-flex", "justify-content-center", "align-items-center", "vh-100");
    //     confirmationContainer.innerHTML = `
    //         <div class="p-4 shadow-lg bg-white rounded">
    //             <h2 class="text-success">Votre demande d'inscription a bien été enregistrée ! ✅</h2>
    //             <p class="mt-3">Veuillez patienter, un conseiller validera votre demande sous peu.</p>
    //             <a href="index.html" class="btn btn-primary mt-3">Retour à l'accueil</a>
    //         </div>
    //     `;

    //     // Ajoute la confirmation dans le body
    //     document.body.appendChild(confirmationContainer);

    //     // Optionnel : Redirection automatique après 3 secondes
    //     setTimeout(() => {
    //         window.location.href = "connexion.html";
    //     }, 3000);
    // });


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
            const response = await fetch("http://localhost:8080/neobank/register?typeCompte=" + typeCompte, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(utilisateur),
            });

            const result = await response.json();
            if(response.ok) {
                handleResponse(result.message);
            } else {
                handleResponse(result.message);
            }
        } catch (error) {
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
                <a href="index.html" class="btn btn-primary mt-3">Retour à l'accueil</a>
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
