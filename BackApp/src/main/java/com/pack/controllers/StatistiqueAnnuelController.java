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

	@PreAuthorize("hasRole('ADMIN')")
	
	@RequestMapping(method = RequestMethod.GET, value = "/statistiqueAnnuels") 
	public List<StatistiqueAnnuel> getStatistiqueAnnuel() 
	{
		System.out.println("Affichage statistiques annuels");
		statistiqueAnnuelService.getAllStatistiqueAnnuel().forEach(t->{
			System.out.println(t.toString());
		});
		return (List<StatistiqueAnnuel>) statistiqueAnnuelService.getAllStatistiqueAnnuel();
	}

	
}
