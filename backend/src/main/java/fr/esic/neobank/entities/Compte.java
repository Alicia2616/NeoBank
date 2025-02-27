package fr.esic.neobank.entities;

import fr.esic.neobank.enums.CompteStatus;
import fr.esic.neobank.enums.CompteType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "compte")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Compte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private CompteType type;

    private double solde;

    @ManyToOne
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private Utilisateur utilisateur;

    @Column(unique = true, nullable = false)
    private String iban;

    private CompteStatus compteStatus;


}
