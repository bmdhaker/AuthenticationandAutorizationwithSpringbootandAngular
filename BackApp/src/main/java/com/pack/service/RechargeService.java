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
import com.pack.repository.UserRepository;

@Component
public class RechargeService {

	@Autowired
	private RechargeRepository rechargeRepo;
	@Autowired
	private SoldeRepository soldeRepo;
	@Autowired
	UserRepository userrepo;

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

	public void updateSolde(String telephone, double prix) {
		double newSolde = prix;
		Solde solde = soldeRepo.getSoldesByTelephone(telephone);
		if (solde != null) {
			System.out.println("ancien solde de telephone " + telephone + " est " + solde.toString());
			newSolde += solde.getValeur();
			solde.setValeur(newSolde);
			soldeRepo.save(solde);
		} else
			System.out.println("utilisateur inexistant");
	}
	
	public Boolean verifierRecharge(Recharge recharge) {
		Boolean ok=false;
		String telephone = "";
		double prix;
		System.out.println(recharge.toString());
		telephone = recharge.getTelephone();
		System.out.println("telephone exist " + userrepo.existsByTelephone(telephone));
		prix = recharge.getPrix();
		// verifier telephone et montant
		if (prix <= 0 || prix > 50) {
			System.out.println("recharge impossible");
			System.out.println("montant errone");
		} else if (!userrepo.existsByTelephone(telephone)) {
			System.out.println("recharge impossible");
			System.out.println("numero telephone non valide");
		}
		// if (userrepo.existsByTelephone(telephone) && prix > 0 && prix<=50) {
		else {
			System.out.println(soldeRepo.getSoldesByTelephone(telephone));
			/*updateSolde(telephone, prix);
			addRecharge(recharge);*/
			ok=true;
		}

		return ok;
	}

}
