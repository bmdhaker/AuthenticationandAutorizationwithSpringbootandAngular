package com.pack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pack.models.Compteur;
import com.pack.repository.CompteurRepository;


@Component
public class CompteurService {

	@Autowired
	private CompteurRepository compteurRepo;
	
	
	public List<Compteur> getAllCompteur() {
		return compteurRepo.findAll();
	}
	
	public void addCompteur(Compteur compteur) {
		compteurRepo.save(compteur);
	}
	
	public Optional<Compteur> getSingleCompteur(Long id) {
		return compteurRepo.findById(id);
	}
	
	public void updateCompteur(Long id, Compteur compteur) {
		compteurRepo.save(compteur);
	}
	
	public void deleteCompteur(Long id) {
		compteurRepo.deleteById(id);
	}
	
	public List<Compteur> getCompteursByUser(String username) {
		return compteurRepo.getCompteursByUsername(username);
	}
	
	
}
