package com.pack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pack.models.Token;
import com.pack.models.Typetoken;
import com.pack.repository.TokenRepository;
import com.pack.repository.TypetokenRepository;


@Component
public class TokenService {

	@Autowired
	private TokenRepository tokenRepo;
	
	
	public List<Token> getAllToken() {
		return tokenRepo.findAll();
	}
	
	public void addToken(Token token) {
		tokenRepo.save(token);
	}
	
	public Optional<Token> getSingleToken(Long id) {
		return tokenRepo.findById(id);
	}
	
	public void updateToken(Long id, Token token) {
		tokenRepo.save(token);
	}
	
	public void deleteToken(Long id) {
		tokenRepo.deleteById(id);
	}
	
	
}
