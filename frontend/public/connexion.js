document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("loginForm");
    let errorMessage = document.getElementById("error-message");
    const confirmationContainer = document.createElement("div");


    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            errorMessage.textContent = "Veuillez remplir tous les champs correctement.";
            errorMessage.style.color = "red";
            return;
        }

        const loginData = {
            email: email,
            password: password
        };

        console.log(loginData);

        try {
            const response = await fetch("http://localhost:8080/neobank/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(loginData)
            });
            
            const result = await response.json();

            if (response.ok && result.succes) {
                handleResponse(result.message, "acceuil.html");
                
                setTimeout(() => {
                    window.location.href = "acceuil.html";
                }, 5000);
            } else {
                handleResponse(result.message, "connexion.html");
            }

 
        } catch (error) {
            console.log(error);
            handleResponse("Une erreur est survenue. Veuillez réessayer plus tard.", "connexion.html")
        }

    });

    
    let registerLink = document.getElementById("registerLink");
    if (registerLink) {
        registerLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "formulaireInscription.html"; 
        });
    }

    function handleResponse(message, page) {
        
     
        form.style.display = "none"; 
        errorMessage.style.display = "none"; 
    
        confirmationContainer.classList.add("container", "text-center", "d-flex", "justify-content-center", "align-items-center", "vh-100");
        confirmationContainer.innerHTML = `
            <div class="p-4 shadow-lg bg-white rounded">
                <h2 class="text-success">` + message + `</h2>
                <a href="`+page+`" class="btn btn-primary mt-3">Retour à l'accueil</a>
            </div>
        `;
    
       
        document.body.appendChild(confirmationContainer);

    
    }
    


});
