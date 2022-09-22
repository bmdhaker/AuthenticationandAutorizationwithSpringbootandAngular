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
import com.pack.models.StatistiqueAnnuel;
import com.pack.service.StatistiqueAnnuelService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/test")
@RestController
public class StatistiqueAnnuelController {

	@Autowired
	StatistiqueAnnuelService statistiqueAnnuelService;

	//@RequestMapping("/statistiqueAnnuels")
	@PreAuthorize("hasRole('ADMIN')")
	//@PreAuthorize("hasRole('ROLE_MODERATOR')")
	
	@RequestMapping(method = RequestMethod.GET, value = "/statistiqueAnnuels") 
	public List<StatistiqueAnnuel> getStatistiqueAnnuel() 
	{
		statistiqueAnnuelService.getAllStatistiqueAnnuel().forEach(t->{
			System.out.println(t.toString());
		});
		return (List<StatistiqueAnnuel>) statistiqueAnnuelService.getAllStatistiqueAnnuel();
	}

	/*
	 * @RequestMapping(method = RequestMethod.POST, value = "/statistiqueAnnuels") public void
	 * addStatistiqueAnnuel(@RequestBody StatistiqueAnnuel statistiqueAnnuel) {
	 * System.out.println("je suis dans ajout statistiqueAnnuel");
	 * System.out.println(statistiqueAnnuel.toString()); statistiqueAnnuelService.addStatistiqueAnnuel(statistiqueAnnuel); }
	 */
	

	@RequestMapping("/statistiqueAnnuels/{id}")
	public Optional<StatistiqueAnnuel> getSingleStatistiqueAnnuel(@PathVariable Long id) {
		return statistiqueAnnuelService.getSingleStatistiqueAnnuel(id);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/statistiqueAnnuels/{id}")
	public void updateStatistiqueAnnuel(@RequestBody StatistiqueAnnuel statistiqueAnnuel, @PathVariable Long id) {
		System.out.println(statistiqueAnnuel.toString());
		statistiqueAnnuelService.updateStatistiqueAnnuel(id, statistiqueAnnuel);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/statistiqueAnnuels/{id}")
	public void deleteStatistiqueAnnuel(@PathVariable Long id) {
		statistiqueAnnuelService.deleteStatistiqueAnnuel(id);
	}

	
}
