package fr.esic.neobank.service;

import fr.esic.neobank.dtos.ResponseDTO;
import fr.esic.neobank.entities.Compte;
import fr.esic.neobank.entities.Utilisateur;
import fr.esic.neobank.enums.CompteStatus;
import fr.esic.neobank.enums.CompteType;
import fr.esic.neobank.enums.Role;
import fr.esic.neobank.repository.CompteRepository;
import fr.esic.neobank.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;

@Service
public class NeoBankService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private CompteRepository compteRepository;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public ResponseDTO createUserAndAccount(Utilisateur utilisateur, CompteType compteType) {
        Optional<Utilisateur> existingUser = utilisateurRepository.findByEmail(utilisateur.getEmail());
        if(existingUser.isPresent()) {
            Utilisateur utilisateurExistant = existingUser.get();
            if(compteRepository.findByUtilisateurIdAndTypeCompte(utilisateurExistant.getId(), compteType).isPresent()) {
                return new ResponseDTO(false,
                        "Un compte de type " + compteType + " est déjà existant avec cette adresse mail",
                        null);
            }
            Compte nouveauCompte = new Compte();
            nouveauCompte.setUtilisateur(utilisateurExistant);
            nouveauCompte.setTypeCompte(compteType);
            nouveauCompte.setSolde(0);
            nouveauCompte.setCompteStatus(CompteStatus.INSTRUCTION);
            nouveauCompte.setIban(generateIban());
            compteRepository.save(nouveauCompte);
            return new ResponseDTO(true,
                    "Votre demande de création du compte "+ compteType + " est bien prise en compte.",
                    nouveauCompte);
        }
        utilisateur.setRoleUtilisateur(Role.CLIENT);
        utilisateur.setPassword(passwordEncoder.encode(utilisateur.getPassword()));
        Utilisateur nouveauUtilisateur = utilisateurRepository.save(utilisateur);
        Compte compte = new Compte();
        compte.setUtilisateur(nouveauUtilisateur);
        compte.setTypeCompte(compteType);
        compte.setSolde(0);
        compte.setCompteStatus(CompteStatus.INSTRUCTION);
        compte.setIban(generateIban());
        compteRepository.save(compte);
        return new ResponseDTO(true,
                "Votre espace utilisateur est bien créé, et votre demande de compte "+ compteType + " est bien prise en compte",
                compte);

    }

    public ResponseDTO login(String email, String password) {
        Optional<Utilisateur> utilisateur1 = utilisateurRepository.findByEmail(email);

        if (utilisateur1.isPresent()) {
            Utilisateur utilisateur2 = utilisateur1.get();
            if (passwordEncoder.matches(password, utilisateur2.getPassword())) {
                return new ResponseDTO(true, "Connexion réussie", utilisateur2);
            } else {
                return new ResponseDTO(false, "Email ou mot de passe incorrect", null);
            }
        }
        return new ResponseDTO(false, "Email ou mot de passe incorrect", null);
    }


    private String generateIban() {
        Random random = new Random();
        String iban;
        do {
            iban = "FR76" + (1000000000L + random.nextInt(900000000));
        } while (compteRepository.findByIban(iban).isPresent());
        return iban;
    }


}
