document.addEventListener("DOMContentLoaded", function () {
    const virementForm = document.getElementById("virementForm");

    virementForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nomPrenom = document.getElementById("nomPrenom").value.trim();
        const iban = document.getElementById("iban").value.trim();
        const montant = document.getElementById("montant").value.trim();

        if (!nomPrenom || !iban || montant <= 0) {
            alert("🚨 Veuillez remplir tous les champs correctement !");
            return;
        }

        alert(`✅ Virement de ${montant}€ envoyé à ${nomPrenom} !`);
        virementForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let virementForm = document.getElementById("virementForm");
    let confirmationMessage = document.getElementById("confirmationMessage");

    virementForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let nomPrenom = document.getElementById("nomPrenom").value;
        let iban = document.getElementById("iban").value;
        let montant = document.getElementById("montant").value;

        
        if (!nomPrenom || !iban || !montant || montant <= 0) {
            confirmationMessage.textContent = "Veuillez remplir tous les champs correctement.";
            confirmationMessage.style.color = "red";
            return;
        }

        
        confirmationMessage.textContent = `Virement de ${montant}€ envoyé à ${nomPrenom} (${iban}).`;
        confirmationMessage.style.color = "#4caf50";

        
        setTimeout(() => {
            virementForm.reset();
            confirmationMessage.textContent = "";
        }, 3000);
    });
});
