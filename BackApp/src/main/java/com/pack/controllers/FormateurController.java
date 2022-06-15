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
import com.pack.models.Formateur;
import com.pack.service.FormateurService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/test")
@RestController
public class FormateurController {

	@Autowired
	FormateurService formateurService;

	//@RequestMapping("/formateurs")
	//@PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasRole('ROLE_MODERATOR')")
	
	@RequestMapping(method = RequestMethod.GET, value = "/formateurs") 
	public List<Formateur> getFormateur() {
		return (List<Formateur>) formateurService.getAllFormateur();

	}

	@RequestMapping(method = RequestMethod.POST, value = "/formateurs")
	public void addFormateur(@RequestBody Formateur formateur) {
		System.out.println(formateur.toString());
		formateurService.addFormateur(formateur);
	}

	@RequestMapping("/formateurs/{id}")
	public Optional<Formateur> getSingleFormateur(@PathVariable Long id) {
		return formateurService.getSingleFormateur(id);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/formateurs/{id}")
	public void updateFormateur(@RequestBody Formateur formateur, @PathVariable Long id) {
		System.out.println(formateur.toString());
		formateurService.updateFormateur(id, formateur);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/formateurs/{id}")
	public void deleteFormateur(@PathVariable Long id) {
		formateurService.deleteFormateur(id);
	}

}
