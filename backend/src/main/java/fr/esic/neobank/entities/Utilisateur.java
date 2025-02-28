package fr.esic.neobank.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import fr.esic.neobank.enums.Role;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "utilisateur")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
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


}
