package com.pack.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pack.models.Compteur;
import com.pack.models.Panier;
import com.pack.models.Recharge;
import com.pack.models.Solde;
import com.pack.models.User;
import com.pack.repository.RechargeRepository;
import com.pack.repository.SoldeRepository;

@Component
public class RechargeService {

	@Autowired
	private RechargeRepository rechargeRepo;
	@Autowired
	private SoldeRepository soldeRepo;

	public List<Recharge> getAllRecharge() {
		return rechargeRepo.findAll();
	}

	public void addRecharge(Recharge recharge) {
		rechargeRepo.save(recharge);
	}

	public Optional<Recharge> getSingleRecharge(Long id) {
		return rechargeRepo.findById(id);
	}

	public void updateRecharge(Long id, Recharge recharge) {
		rechargeRepo.save(recharge);
	}

	public void deleteRecharge(Long id) {
		rechargeRepo.deleteById(id);
	}


	public void updateSolde(String telephone,double prix) {
		double newSolde=prix;
		Solde solde=soldeRepo.getSoldesByTelephone(telephone);
		if(solde!=null) {
			System.out.println("ancien solde de telephone "+telephone+" est "+solde.toString());
			newSolde+=solde.getValeur();
			solde.setValeur(newSolde);
			soldeRepo.save(solde);
		}
		else
			System.out.println("utilisateur inexistant");
}

}
