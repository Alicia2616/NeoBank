package fr.esic.neobank.controller;

import fr.esic.neobank.dtos.ResponseDTO;
import fr.esic.neobank.entities.Utilisateur;
import fr.esic.neobank.enums.CompteType;
import fr.esic.neobank.repository.UtilisateurRepository;
import fr.esic.neobank.service.NeoBankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/neobank")
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS})
public class NeoBankController {



    @Autowired
    private NeoBankService neoBankService;
    @Autowired
    private UtilisateurRepository utilisateurRepository;


    @PostMapping(value = "/register")
    public ResponseEntity<ResponseDTO> register(@RequestBody Utilisateur utilisateur, @RequestParam CompteType typeCompte) {
        ResponseDTO responseDTO = neoBankService.createUserAndAccount(utilisateur, typeCompte);
        return ResponseEntity.ok(responseDTO);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody Map<String, String> credentials) {

        ResponseDTO responseDTO = neoBankService.login(credentials.get("email"), credentials.get("password"));
        return ResponseEntity.ok(responseDTO);

    }

}
