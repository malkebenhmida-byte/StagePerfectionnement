
package com.example.crudapi.controller;

import com.example.crudapi.entity.Client;
import org.springframework.web.bind.annotation.*;

//import java.util.List;
import com.example.crudapi.service.ClientService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("api/clients")
public class ClientController 
{
     @Autowired
    private  ClientService clientServ;
     
     // ajout 
      @PostMapping
    public ResponseEntity<?> createClient(@RequestBody Client client) {
        return clientServ.createClient(client);
    }
    
    //lire tout 
    @GetMapping
    public List<Client> getAllClients() {
        return clientServ.getAllClients();
    }
    
    //lire un 
    @GetMapping("/{identifiant}")
    public ResponseEntity<?> getClientByIdentifiant(
            @PathVariable String identifiant) {
        return clientServ.getClientById(identifiant);
    }
    
    //modifier 
    @PutMapping("/{identifiant}")
    public ResponseEntity<?> updateClient(
            @PathVariable String identifiant,
            @RequestBody Client clientDetails) {
        return clientServ.updateClient(identifiant, clientDetails);
    }
    
    //effacer 
     @DeleteMapping("/{identifiant}")
    public ResponseEntity<?> deleteClient(
            @PathVariable String identifiant) {
        return clientServ.deleteClient(identifiant);
    }      
}
