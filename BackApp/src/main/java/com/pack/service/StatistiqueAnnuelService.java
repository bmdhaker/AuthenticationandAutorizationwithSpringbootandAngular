package com.pack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pack.models.StatistiqueAnnuel;
import com.pack.repository.StatistiqueAnnuelRepository;


@Component
public class StatistiqueAnnuelService {

	@Autowired
	private StatistiqueAnnuelRepository statistiqueAnnuelRepo;
	
	
	public List<StatistiqueAnnuel> getAllStatistiqueAnnuel() {
		return statistiqueAnnuelRepo.findAll();
	}
	
	public void addStatistiqueAnnuel(StatistiqueAnnuel statistiqueAnnuel) {
		statistiqueAnnuelRepo.save(statistiqueAnnuel);
	}
	
	public Optional<StatistiqueAnnuel> getSingleStatistiqueAnnuel(Long id) {
		return statistiqueAnnuelRepo.findById(id);
	}
	
	public void updateStatistiqueAnnuel(Long id, StatistiqueAnnuel statistiqueAnnuel) {
		statistiqueAnnuelRepo.save(statistiqueAnnuel);
	}
	
	public void deleteStatistiqueAnnuel(Long id) {
		statistiqueAnnuelRepo.deleteById(id);
	}
	
	
}
