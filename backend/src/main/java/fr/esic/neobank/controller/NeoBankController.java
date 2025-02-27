package fr.esic.neobank.controller;

import fr.esic.neobank.dtos.ResponseDTO;
import fr.esic.neobank.entities.Utilisateur;
import fr.esic.neobank.enums.CompteType;
import fr.esic.neobank.service.NeoBankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/neobank")
public class NeoBankController {


    @Autowired
    private NeoBankService neoBankService;

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> register(@RequestBody Utilisateur utilisateur, @RequestParam CompteType typeCompte) {
        ResponseDTO responseDTO = neoBankService.createUserAndAccount(utilisateur, typeCompte);
        return ResponseEntity.ok(responseDTO);
    }

//    @GetMapping('')

}
