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

import com.pack.models.Recharge;
import com.pack.models.User;
import com.pack.repository.SoldeRepository;
import com.pack.repository.UserRepository;
import com.pack.service.RechargeService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/test")
@RestController
public class RechargeController {

	@Autowired
	RechargeService rechargeService;
	@Autowired
	SoldeRepository solderrepo;

	// @RequestMapping("/recharges")
	// @PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasRole('ROLE_MODERATOR')")

	@RequestMapping(method = RequestMethod.GET, value = "/recharges")
	public List<Recharge> getRecharge()

	{
		rechargeService.getAllRecharge().forEach(t -> {
			System.out.println(t.toString());
		});
		return (List<Recharge>) rechargeService.getAllRecharge();

	}

	@RequestMapping(method = RequestMethod.POST, value = "/recharges")
	public void addRecharge(@RequestBody Recharge recharge) {
		if (rechargeService.verifierRecharge(recharge)) {
			System.out.println(solderrepo.getSoldesByTelephone(recharge.getTelephone()));
			rechargeService.updateSolde(recharge.getTelephone(), recharge.getPrix());
			rechargeService.addRecharge(recharge);
		}
	}

	@RequestMapping("/recharges/{id}")
	public Optional<Recharge> getSingleRecharge(@PathVariable Long id) {
		return rechargeService.getSingleRecharge(id);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/recharges/{id}")
	public void updateRecharge(@RequestBody Recharge recharge, @PathVariable Long id) {
		System.out.println(recharge.toString());
		rechargeService.updateRecharge(id, recharge);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/recharges/{id}")
	public void deleteRecharge(@PathVariable Long id) {
		rechargeService.deleteRecharge(id);
	}

	/*
	 * @RequestMapping(method = RequestMethod.GET, value = "/recharges/{username}")
	 * public List<Recharge> getRechargeByUser(@PathVariable String username) { //
	 * public int getCompteurByUser(@PathVariable Long iduser) {
	 * System.out.println("username:= " + username);
	 * System.out.println("recharge de l'utilistauer");
	 * rechargeService.getRechargesByUser(username).forEach(p->{
	 * System.out.println(p.toString()); }); return
	 * rechargeService.getRechargesByUser(username);
	 * 
	 * }
	 */
}
