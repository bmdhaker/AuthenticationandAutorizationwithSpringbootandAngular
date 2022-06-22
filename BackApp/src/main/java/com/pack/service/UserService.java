package com.pack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pack.models.User;
import com.pack.repository.UserRepository;


@Component
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	
	public List<User> getAllUser() {
		return userRepo.findAll();
	}
	
	public void addUser(User user) {
		userRepo.save(user);
	}
	
	public Optional<User> getSingleUser(Long id) {
		return userRepo.findById(id);
	}
	
	public void updateUser(Long id, User user) {
		userRepo.save(user);
	}
	
	public void deleteUser(Long id) {
		userRepo.deleteById(id);
	}
	
	
}
