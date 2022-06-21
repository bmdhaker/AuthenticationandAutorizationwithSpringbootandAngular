package com.pack;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.pack.models.Typetoken;
import com.pack.models.Compteur;
import com.pack.models.ERole;
import com.pack.models.Formateur;
import com.pack.models.Role;
import com.pack.models.Token;
import com.pack.repository.TypetokenRepository;
import com.pack.repository.TokenRepository;
import com.pack.repository.CompteurRepository;
import com.pack.repository.FormateurRepository;
import com.pack.repository.RoleRepository;


@SpringBootApplication
public class SpringBootSecurityJwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootSecurityJwtApplication.class, args);
	}
	
	@Autowired
	RoleRepository roleRepo;
	
	  @Autowired 
	  FormateurRepository formateurrepository;
	 
	  @Autowired 
	  TypetokenRepository typetokenrepository;

	  @Autowired 
	  TokenRepository tokenrepository;
	  
	  @Autowired 
	  CompteurRepository compteurrepository;

	  @Bean
	public CommandLineRunner demo() {
		return (args) -> {
			
			
			  Formateur siwar = new Formateur("Hammoudi","Siwar","2548", "87542136", "aaa","fff", "bbb"); 
			  formateurrepository.save(siwar);
			  formateurrepository.findAll().forEach(f->{
				  System.out.println(f.toString());
			  });

			  Typetoken typetoken5 = new Typetoken("5 dinars",5.7); 
			  typetokenrepository.save(typetoken5);

			  Typetoken typetoken10 = new Typetoken("10 dinars",11.4); 
			  typetokenrepository.save(typetoken10);

			  Typetoken typetoken20 = new Typetoken("20 dinars",22.1); 
			  typetokenrepository.save(typetoken20);

			  typetokenrepository.findAll().forEach(t->{
				  System.out.println(t.toString());
			  });
			  
			  Token token1 = new Token("C-12458965",typetoken10); 
			  tokenrepository.save(token1);
			  tokenrepository.findAll().forEach(t->{
				  System.out.println(t.toString());
			  });

			  //Ajout compteur

			  Compteur compteur1 = new Compteur();
			  compteur1.setNumero("C-123456789");
			  compteurrepository.save(compteur1);
			  compteurrepository.findAll().forEach(c->{
				  System.out.println(c.toString());
			  });
			  

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
