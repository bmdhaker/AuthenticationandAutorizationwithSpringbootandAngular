package com.pack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pack.models.CentreRecharge;
import com.pack.repository.CentreRechargeRepository;


@Component
public class CentreRechargeService {

	@Autowired
	private CentreRechargeRepository centreRechargeRepo;
	
	
	public List<CentreRecharge> getAllCentreRecharge() {
		return centreRechargeRepo.findAll();
	}
	
	public void addCentreRecharge(CentreRecharge centreRecharge) {
		centreRechargeRepo.save(centreRecharge);
	}
	
	public Optional<CentreRecharge> getSingleCentreRecharge(Long id) {
		return centreRechargeRepo.findById(id);
	}
	
	public void updateCentreRecharge(Long id, CentreRecharge centreRecharge) {
		centreRechargeRepo.save(centreRecharge);
	}
	
	public void deleteCentreRecharge(Long id) {
		centreRechargeRepo.deleteById(id);
	}
	
	
}
