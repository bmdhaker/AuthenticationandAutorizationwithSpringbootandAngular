package com.pack.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pack.models.Compteur;
import com.pack.models.Panier;
import com.pack.repository.PanierRepository;

@Component
public class PanierService {

	@Autowired
	private PanierRepository panierRepo;

	public List<Panier> getAllPanier() {
		return panierRepo.findAll();
	}

	public void addPanier(Panier panier) {
		panierRepo.save(panier);
	}

	public Optional<Panier> getSinglePanier(Long id) {
		return panierRepo.findById(id);
	}

	public void updatePanier(Long id, Panier panier) {
		panierRepo.save(panier);
	}

	public void deletePanier(Long id) {
		panierRepo.deleteById(id);
	}

	public List<Panier> getPaniersByUser(String username) {
		List<Panier> listePaniersActives = new ArrayList<Panier>();
		panierRepo.getPaniersByUsername(username).forEach(p -> {
			if (p.getActive()) {
				listePaniersActives.add(p);
			}
		});
		System.out.println("affichage panier actifs");
		listePaniersActives.forEach(p->{
			System.out.println(p.toString());
		});
		return listePaniersActives;
	}

}
