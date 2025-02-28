package fr.esic.neobank.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import fr.esic.neobank.enums.Role;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "utilisateur")
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    private String prenom;

    private String email;

    private String telephone;

    private String adresse;

    private String codePostal;

    private String password;

    @JsonIgnore
    @Enumerated(EnumType.STRING)
    private Role roleUtilisateur;

    @OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Compte> comptes;


    public Utilisateur() {
    }

    public Utilisateur(Long id, String nom, String prenom, String email, String telephone, String adresse, String codePostal, String password, Role roleUtilisateur, List<Compte> comptes) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.password = password;
        this.roleUtilisateur = roleUtilisateur;
        this.comptes = comptes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getCodePostal() {
        return codePostal;
    }

    public void setCodePostal(String codePostal) {
        this.codePostal = codePostal;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRoleUtilisateur() {
        return roleUtilisateur;
    }

    public void setRoleUtilisateur(Role roleUtilisateur) {
        this.roleUtilisateur = roleUtilisateur;
    }

    public List<Compte> getComptes() {
        return comptes;
    }

    public void setComptes(List<Compte> comptes) {
        this.comptes = comptes;
    }

    @Override
    public String toString() {
        return "Utilisateur{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", email='" + email + '\'' +
                ", telephone='" + telephone + '\'' +
                ", adresse='" + adresse + '\'' +
                ", codePostal='" + codePostal + '\'' +
                ", password='" + password + '\'' +
                ", roleUtilisateur=" + roleUtilisateur +
                ", comptes=" + comptes +
                '}';
    }
}
