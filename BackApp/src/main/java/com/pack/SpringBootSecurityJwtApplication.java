package com.pack;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.pack.models.ERole;
import com.pack.models.Formateur;
import com.pack.models.Role;
import com.pack.repository.FormateurRepository;
import com.pack.repository.RoleRepository;


@SpringBootApplication
public class SpringBootSecurityJwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootSecurityJwtApplication.class, args);
	}
	
	@Autowired
	RoleRepository roleRepo;
	
	  @Autowired FormateurRepository formateurrepository;
	 

	@Bean
	public CommandLineRunner demo() {
		return (args) -> {
			
			
			  Formateur mahdi = new Formateur("Hammoudi","Siwar","2548", "87542136", "aaa","fff", "bbb"); 
			  formateurrepository.save(mahdi);
			  

			// Create users with BCrypt encoded password (user/user, admin/admin)
			Role role1 = new Role(ERole.ROLE_USER);
			Role role2 = new Role(ERole.ROLE_MODERATOR);
			Role role3 = new Role(ERole.ROLE_ADMIN);
			roleRepo.save(role1);
			roleRepo.save(role2);
			roleRepo.save(role3);

			// Affichage
			roleRepo.findAll().forEach(p -> {
				System.out.println(p.toString());

			});

		};
	}

}
