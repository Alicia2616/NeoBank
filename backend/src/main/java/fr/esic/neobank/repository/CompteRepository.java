package fr.esic.neobank.repository;

import fr.esic.neobank.entities.Compte;
import fr.esic.neobank.enums.CompteType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CompteRepository extends JpaRepository<Compte, Long> {

    List<Compte> findByUtilisateurId(Long utilisateurId);
    Optional<Compte> findByUtilisateurIdAndTypeCompte(Long utilisateurId, CompteType type);
    Optional<Compte> findByIban(String iban);


}
