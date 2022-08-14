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
import com.pack.models.Panier;
import com.pack.service.PanierService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/test")
@RestController
public class PanierController {

	@Autowired
	PanierService panierService;

	//@RequestMapping("/paniers")
	//@PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasRole('ROLE_MODERATOR')")
	
	@RequestMapping(method = RequestMethod.GET, value = "/paniers") 
	public List<Panier> getPanier() 
	
	{
		panierService.getAllPanier().forEach(t->{
			System.out.println(t.toString());
		});
		return (List<Panier>) panierService.getAllPanier();

	}

	@RequestMapping(method = RequestMethod.POST, value = "/paniers")
	public void addPanier(@RequestBody Panier panier) {
		System.out.println(panier.toString());
		panierService.addPanier(panier);
	}

	@RequestMapping("/paniers/{id}")
	public Optional<Panier> getSinglePanier(@PathVariable Long id) {
		return panierService.getSinglePanier(id);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/paniers/{id}")
	public void updatePanier(@RequestBody Panier panier, @PathVariable Long id) {
		System.out.println(panier.toString());
		panierService.updatePanier(id, panier);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/paniers/{id}")
	public void deletePanier(@PathVariable Long id) {
		panierService.deletePanier(id);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/paniers/{username}")
	public List<Panier> getPanierByUser(@PathVariable String username) {
//	public int getCompteurByUser(@PathVariable Long iduser) {
		System.out.println("username:= " + username);
		System.out.println("panier de l'utilistauer");
		panierService.getPaniersByUser(username).forEach(p->{
			System.out.println(p.toString());
		});
		return panierService.getPaniersByUser(username);

	}

}
