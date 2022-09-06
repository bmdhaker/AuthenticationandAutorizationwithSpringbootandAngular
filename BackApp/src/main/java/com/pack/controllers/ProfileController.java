package com.pack.controllers;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pack.ConvertDate;
import com.pack.models.Commande;
import com.pack.models.Compteur;
import com.pack.models.ERole;
import com.pack.models.User;
import com.pack.service.CommandeService;
import com.pack.service.SoldeService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/test")
@RestController
public class ProfileController {

	/*
	 * @Autowired ProfileService profileService;
	 */
	@Autowired
	CommandeService commandeService;
	@Autowired
	SoldeService soldeService;
	@Autowired
	ConvertDate convertDate;

	// @RequestMapping("/profiles")
	// @PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasRole('ROLE_USER')")

	/*
	 * @RequestMapping(method = RequestMethod.GET, value = "/profiles") public
	 * List<Profile> getProfile()
	 * 
	 * { profileService.getAllProfile().forEach(t -> {
	 * System.out.println(t.toString()); }); return (List<Profile>)
	 * profileService.getAllProfile();
	 * 
	 * }
	 */

	/*
	 * @RequestMapping(method = RequestMethod.POST, value = "/profiles") public void
	 * addProfile(@RequestBody Profile profile) {
	 * System.out.println(profile.toString()); profileService.addProfile(profile); }
	 * 
	 * @RequestMapping("/profiles/{id}") public Optional<Profile>
	 * getSingleProfile(@PathVariable Long id) { return
	 * profileService.getSingleProfile(id); }
	 */

	@RequestMapping(method = RequestMethod.POST, value = "/profiles/{telephone}")
	public void updateProfile(@PathVariable String telephone,@RequestBody String password) {
		System.out.println("je suis dans profile");
		System.out.println(password+";"+telephone);
		//System.out.println(user.toString());
		//profileService.updateProfile(id, profile);
	}

	
	/*
	 * @RequestMapping(method = RequestMethod.GET, value = "/profiles/{username}")
	 * public List<Profile> getProfileByUser(@PathVariable String username) { //
	 * public int getCompteurByUser(@PathVariable Long iduser) {
	 * System.out.println("username:= " + username);
	 * System.out.println("profile de l'utilistauer");
	 * profileService.getProfilesByUser(username).forEach(p -> {
	 * System.out.println(p.toString()); }); return
	 * profileService.getProfilesByUser(username);
	 * 
	 * }
	 */

}
