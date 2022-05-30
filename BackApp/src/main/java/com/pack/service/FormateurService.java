package com.pack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pack.models.Formateur;
import com.pack.repository.FormateurRepository;


@Component
public class FormateurService {

	@Autowired
	private FormateurRepository formateurRepo;
	
	
	public List<Formateur> getAllFormateur() {
		return formateurRepo.findAll();
	}
	
	public void addFormateur(Formateur formateur) {
		formateurRepo.save(formateur);
	}
	
	public Optional<Formateur> getSingleFormateur(Long id) {
		return formateurRepo.findById(id);
	}
	
	public void updateFormateur(Long id, Formateur formateur) {
		formateurRepo.save(formateur);
	}
	
	public void deleteFormateur(Long id) {
		formateurRepo.deleteById(id);
	}
	
	
}
