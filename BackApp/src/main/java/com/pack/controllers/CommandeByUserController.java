package com.pack.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pack.models.Compteur;
import com.pack.models.ERole;
import com.pack.models.Commande;
import com.pack.service.CommandeService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/test")
@RestController
public class CommandeByUserController {

	@Autowired
	CommandeService commandeService;

	// @RequestMapping("/commandes")
	// @PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasRole('ROLE_USER')")

	@RequestMapping(method = RequestMethod.POST, value = "/commandes")
	public void addCommande(@RequestBody Commande commande) {
		System.out.println(commande.toString());
		commandeService.addCommande(commande);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/commandes/{username}")
	public List<Commande> getCommandeByUser(@PathVariable String username) {
//	public int getCompteurByUser(@PathVariable Long iduser) {
		System.out.println("username:= " + username);
		System.out.println("commande de l'utilistauer");
		commandeService.getCommandesByUser(username).forEach(p -> {
			System.out.println(p.toString());
		});
		return commandeService.getCommandesByUser(username);

	}

}
