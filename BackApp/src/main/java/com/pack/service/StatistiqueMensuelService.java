package com.pack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pack.models.StatistiqueMensuel;
import com.pack.repository.StatistiqueMensuelRepository;


@Component
public class StatistiqueMensuelService {

	@Autowired
	private StatistiqueMensuelRepository statistiqueMensuelRepo;
	
	
	public List<StatistiqueMensuel> getAllStatistiqueMensuel() {
		return statistiqueMensuelRepo.findAll();
	}
	
	public void addStatistiqueMensuel(StatistiqueMensuel statistiqueMensuel) {
		statistiqueMensuelRepo.save(statistiqueMensuel);
	}
	
	public Optional<StatistiqueMensuel> getSingleStatistiqueMensuel(Long id) {
		return statistiqueMensuelRepo.findById(id);
	}
	
	public void updateStatistiqueMensuel(Long id, StatistiqueMensuel statistiqueMensuel) {
		statistiqueMensuelRepo.save(statistiqueMensuel);
	}
	
	public void deleteStatistiqueMensuel(Long id) {
		statistiqueMensuelRepo.deleteById(id);
	}
	
	
}
