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

import com.pack.models.ERole;
import com.pack.models.Compteur;
import com.pack.service.CompteurService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/test")
@RestController
public class CompteurController {

	@Autowired
	CompteurService compteurService;

	//@RequestMapping("/compteurs")
	//@PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasRole('ROLE_MODERATOR')")
	
	@RequestMapping(method = RequestMethod.GET, value = "/compteurs") 
	public List<Compteur> getCompteur() {
		return (List<Compteur>) compteurService.getAllCompteur();

	}

	@RequestMapping(method = RequestMethod.POST, value = "/compteurs")
	public void addCompteur(@RequestBody Compteur compteur) {
		System.out.println(compteur.toString());
		compteurService.addCompteur(compteur);
	}

	@RequestMapping("/compteurs/{id}")
	public Optional<Compteur> getSingleCompteur(@PathVariable Long id) {
		return compteurService.getSingleCompteur(id);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/compteurs/{id}")
	public void updateCompteur(@RequestBody Compteur compteur, @PathVariable Long id) {
		System.out.println(compteur.toString());
		compteurService.updateCompteur(id, compteur);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/compteurs/{id}")
	public void deleteCompteur(@PathVariable Long id) {
		compteurService.deleteCompteur(id);
	}

}
