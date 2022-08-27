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
import com.pack.models.CentreRecharge;
import com.pack.service.CentreRechargeService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/test")
@RestController
public class CentreRechargeController {

	@Autowired
	CentreRechargeService centreRechargeService;

	//@RequestMapping("/centreRecharges")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	//@PreAuthorize("hasRole('ROLE_MODERATOR')")

	/*
	 * @RequestMapping(method = RequestMethod.GET, value = "/centreRecharges")
	 * public List<CentreRecharge> getCentreRecharge() { return
	 * (List<CentreRecharge>) centreRechargeService.getAllCentreRecharge();
	 * 
	 * }
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/centreRecharges")
	public void addCentreRecharge(@RequestBody CentreRecharge centreRecharge) {
		System.out.println(centreRecharge.toString());
		centreRechargeService.addCentreRecharge(centreRecharge);
	}

	@RequestMapping("/centreRecharges/{id}")
	public Optional<CentreRecharge> getSingleCentreRecharge(@PathVariable Long id) {
		return centreRechargeService.getSingleCentreRecharge(id);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/centreRecharges/{id}")
	public void updateCentreRecharge(@RequestBody CentreRecharge centreRecharge, @PathVariable Long id) {
		System.out.println(centreRecharge.toString());
		centreRechargeService.updateCentreRecharge(id, centreRecharge);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/centreRecharges/{id}")
	public void deleteCentreRecharge(@PathVariable Long id) {
		centreRechargeService.deleteCentreRecharge(id);
	}

}
