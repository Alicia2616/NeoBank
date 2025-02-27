document.addEventListener("DOMContentLoaded", function() {
    let solde = document.getElementById("solde");
    let transactionList = document.getElementById("transaction-list");
    let virementList = document.getElementById("virement-list");

    // Exemple de transactions
    let transactions = [
        { description: "Paiement Amazon", montant: "-€30.50", date: "2024-02-01", type: "sortie" },
        { description: "Salaire", montant: "+€1500.00", date: "2024-02-05", type: "entrée" },
        { description: "Restaurant", montant: "-€45.20", date: "2024-02-10", type: "sortie" }
    ];

    // Exemple de virements
    let virements = [
        { description: "Virement reçu - Paul", montant: "+€500.00", date: "2024-02-07", type: "entrée" },
        { description: "Virement envoyé - Alice", montant: "-€200.00", date: "2024-02-12", type: "sortie" }
    ];

    // Afficher les transactions
    transactions.forEach(t => {
        let item = document.createElement("li");
        item.className = "list-group-item";
        item.innerHTML = `
            <span>${t.description}</span>
            <span class="text-muted">${t.date}</span>
            <strong class="${t.type === 'entrée' ? 'text-success' : 'text-danger'}">${t.montant}</strong>
        `;
        transactionList.appendChild(item);
    });

    // Afficher les virements
    virements.forEach(v => {
        let item = document.createElement("li");
        item.className = "list-group-item";
        item.innerHTML = `
            <span>${v.description}</span>
            <span class="text-muted">${v.date}</span>
            <strong class="${v.type === 'entrée' ? 'text-success' : 'text-danger'}">${v.montant}</strong>
        `;
        virementList.appendChild(item);
    });
});
