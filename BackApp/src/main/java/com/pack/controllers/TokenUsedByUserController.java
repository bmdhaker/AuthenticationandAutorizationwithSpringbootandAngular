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

import com.pack.models.Token;
import com.pack.models.ERole;
import com.pack.models.Token;
import com.pack.service.TokenService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/test")
@RestController
public class TokenUsedByUserController {

	@Autowired
	TokenService tokenService;

	//@RequestMapping("/tokens")
	//@PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasRole('ROLE_MODERATOR')")
	
	/*
	 * @RequestMapping(method = RequestMethod.GET, value = "/tokensByUser") public
	 * List<Token> getTokenByUser()
	 * 
	 * { tokenService.getAllToken().forEach(t->{ System.out.println(t.toString());
	 * }); return (List<Token>) tokenService.getAllToken();
	 * 
	 * }
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/tokensByUser/{username}")
	public List<Token> getTokenByUser(@PathVariable String username) {
//	public int getTokenByUser(@PathVariable Long iduser) {
		System.out.println("username:= " + username);
		return tokenService.getTokensByUser(username);
	}
	
}
