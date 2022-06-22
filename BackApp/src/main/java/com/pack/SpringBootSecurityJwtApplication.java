package com.pack;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.pack.models.Typetoken;
import com.pack.models.User;
import com.pack.models.Compteur;
import com.pack.models.ERole;
import com.pack.models.Formateur;
import com.pack.models.Role;
import com.pack.models.Token;
import com.pack.repository.TypetokenRepository;
import com.pack.repository.UserRepository;
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

	@Autowired
	UserRepository userrepository;

	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	RoleRepository roleRepository;


	@Bean
	public CommandLineRunner demo() {
		return (args) -> {

			Formateur siwar = new Formateur("Hammoudi", "Siwar", "2548", "87542136", "aaa", "fff", "bbb");
			formateurrepository.save(siwar);
			formateurrepository.findAll().forEach(f -> {
				System.out.println(f.toString());
			});

			Typetoken typetoken5 = new Typetoken("5 dinars", 5.7);
			typetokenrepository.save(typetoken5);

			Typetoken typetoken10 = new Typetoken("10 dinars", 11.4);
			typetokenrepository.save(typetoken10);

			Typetoken typetoken20 = new Typetoken("20 dinars", 22.1);
			typetokenrepository.save(typetoken20);

			typetokenrepository.findAll().forEach(t -> {
				System.out.println(t.toString());
			});
			
			// Create users with BCrypt encoded password (user/user, admin/admin)
						Role role1 = new Role(ERole.ROLE_USER);
						Role role2 = new Role(ERole.ROLE_MODERATOR);
						Role role3 = new Role(ERole.ROLE_ADMIN);
						roleRepo.save(role1);
						roleRepo.save(role2);
						roleRepo.save(role3);

						// Affichage
						roleRepo.findAll().forEach(r -> {
							System.out.println(r.toString());

						});
			
			// ajout user
			// cryptage de mot de passe
			String password1 = "helloworld", password2 = "hitunisia", passwordadmin = "administrator", cryptedPassword1 = "", cryptedPassword2 = "",cryptedPasswordadmin = "";
			cryptedPassword1 = encoder.encode(password1);
			cryptedPassword2 = encoder.encode(password2);
			cryptedPasswordadmin=encoder.encode(passwordadmin);
			System.out.println("cryptedPassword1 "+cryptedPassword1+" &cryptedPassword2 "+cryptedPassword2);
			// setting user  role
			User admin = new User("admin", "admin@g.com", cryptedPassword1);
			User dh = new User("dha", "dh@g.com", cryptedPassword1);
			User md = new User("mda", "mda@g.com", cryptedPassword2);
			
			Set<Role> rolesadmin = new HashSet<>();
			Set<Role> rolesmoderator = new HashSet<>();
			Role adminRole=new Role();
			Role modRole = new Role();
			adminRole.setName(ERole.ROLE_ADMIN);
			modRole.setName(ERole.ROLE_MODERATOR);
			roleRepository.save(adminRole);
			roleRepository.save(modRole);

			rolesadmin.add(adminRole);
			rolesmoderator.add(modRole);

			admin.setRoles(rolesadmin);
			dh.setRoles(rolesmoderator);
			md.setRoles(rolesmoderator);
			userrepository.save(admin);
			userrepository.save(dh);
			userrepository.save(md);
			// Ajout compteur

			Compteur compteur1 = new Compteur();
			Compteur compteur2 = new Compteur();
			compteur1.setLibelle("C-124578");
			compteur2.setLibelle("C-104578");
			compteur1.setUser(dh);
			compteur2.setUser(md);
			compteurrepository.save(compteur1);
			compteurrepository.save(compteur2);

			// affichage des compteurs d'un utilisateur x
			compteurrepository.getCompteursByUsername(md.getUsername()).forEach(c -> {
				System.out.println(c.toString());
			});

			// affichage des compteurs de tous les utilisateurs
			userrepository.findAll().forEach(u -> {
				System.out.println("compteurs de user " + u.getUsername());
				compteurrepository.getCompteursByUsername(u.getUsername()).forEach(cu -> {
					System.out.println(cu.toString());
				});
			});

			// Affichage de tous les tokens
			Token token1 = new Token(compteur1, typetoken10);
			tokenrepository.save(token1);
			tokenrepository.findAll().forEach(t -> {
				System.out.println(t.toString());
			});

			

		};
	}

}
