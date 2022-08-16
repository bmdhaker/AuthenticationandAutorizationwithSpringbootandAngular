package com.pack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pack.models.Compteur;
import com.pack.models.Solde;
import com.pack.repository.SoldeRepository;


@Component
public class SoldeService {

	@Autowired
	private SoldeRepository soldeRepo;
	
	
	public List<Solde> getAllSolde() {
		return soldeRepo.findAll();
	}
	
	public void addSolde(Solde solde) {
		soldeRepo.save(solde);
	}
	
	public Optional<Solde> getSingleSolde(Long id) {
		return soldeRepo.findById(id);
	}
	
	public void updateSolde(Long id, Solde solde) {
		soldeRepo.save(solde);
	}
	
	public void deleteSolde(Long id) {
		soldeRepo.deleteById(id);
	}
	public List<Solde> getSoldesByUser(String username) {
		return soldeRepo.getSoldesByUsername(username);
	}

	
}
