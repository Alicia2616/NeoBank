package fr.esic.neobank.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import fr.esic.neobank.enums.CompteStatus;
import fr.esic.neobank.enums.CompteType;
import jakarta.persistence.*;

@Entity
@Table(name = "compte")
public class Compte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private CompteType typeCompte;

    private double solde;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private Utilisateur utilisateur;

    @Column(unique = true, nullable = false)
    private String iban;

    @Enumerated(EnumType.STRING)
    private CompteStatus compteStatus;

    public Compte(){

    }

    public Compte(Long id, CompteType typeCompte, double solde, Utilisateur utilisateur, String iban, CompteStatus compteStatus) {
        this.id = id;
        this.typeCompte = typeCompte;
        this.solde = solde;
        this.utilisateur = utilisateur;
        this.iban = iban;
        this.compteStatus = compteStatus;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CompteType getTypeCompte() {
        return typeCompte;
    }

    public void setTypeCompte(CompteType typeCompte) {
        this.typeCompte = typeCompte;
    }

    public double getSolde() {
        return solde;
    }

    public void setSolde(double solde) {
        this.solde = solde;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public CompteStatus getCompteStatus() {
        return compteStatus;
    }

    public void setCompteStatus(CompteStatus compteStatus) {
        this.compteStatus = compteStatus;
    }

    public String getIban() {
        return iban;
    }

    public void setIban(String iban) {
        this.iban = iban;
    }

    @Override
    public String toString() {
        return "Compte{" +
                "id=" + id +
                ", typeCompte=" + typeCompte +
                ", solde=" + solde +
                ", utilisateur=" + utilisateur +
                ", iban='" + iban + '\'' +
                ", compteStatus=" + compteStatus +
                '}';
    }
}
