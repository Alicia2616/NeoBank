document.addEventListener("DOMContentLoaded", function() {
    
    let solde = document.getElementById("solde");
    let transactionList = document.getElementById("transaction-list");

  
    let transactions = [
        { description: "Paiement Amazon", montant: "-€30.50", type: "sortie" },
        { description: "Salaire", montant: "+€1500.00", type: "entrée" },
        { description: "Restaurant", montant: "-€45.20", type: "sortie" },
        { description: "Auchan", montant: "-€105.50", type: "sortie" },
        { description: "Transavia", montant: "-€300.90", type: "sortie" },
        { description: "Pass Navigo / IMAGIN-R", montant: "-€41.60", type: "sortie" },
        { description: "SFR", montant: "-€19.99", type: "sortie" },
        { description: "Spotify", montant: "-€9.99", type: "sortie" },
        { description: "Virement Reçu - Paul", montant: "+€500.00", type: "entrée" },
        { description: "Virement Envoyé - Alice", montant: "-€200.00", type: "sortie" }
    ];

    
    transactions.forEach(t => {
        let item = document.createElement("li");
        item.className = "list-group-item d-flex justify-content-between align-items-center";
        item.innerHTML = `
            <span>${t.description}</span>
            <strong class="${t.type === 'entrée' ? 'text-success' : 'text-danger'}">${t.montant}</strong>
        `;
        transactionList.appendChild(item);
    });

    
    let totalSolde = transactions.reduce((acc, t) => {
        let montant = parseFloat(t.montant.replace("€", "").replace(",", "."));
        return t.type === "entrée" ? acc + montant : acc - montant;
    }, 5000); 

    solde.textContent = `€${totalSolde.toFixed(2)}`;
});
