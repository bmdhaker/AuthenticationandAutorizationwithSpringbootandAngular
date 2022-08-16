package com.pack;

import java.util.Date;
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
import com.pack.models.Commande;
import com.pack.models.Compteur;
import com.pack.models.ERole;
import com.pack.models.Formateur;
import com.pack.models.Panier;
import com.pack.models.Role;
import com.pack.models.Solde;
import com.pack.models.Token;
import com.pack.repository.TypetokenRepository;
import com.pack.repository.UserRepository;
import com.pack.repository.TokenRepository;
import com.pack.repository.CommandeRepository;
import com.pack.repository.CompteurRepository;
import com.pack.repository.FormateurRepository;
import com.pack.repository.PanierRepository;
import com.pack.repository.RoleRepository;
import com.pack.repository.SoldeRepository;

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

	@Autowired
	PanierRepository panierRepository;

	@Autowired
	CommandeRepository commandeRepository;

	@Autowired
	SoldeRepository soldeRepository;

	
	@Bean
	public CommandLineRunner demo() {
		return (args) -> {

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
			String password1 = "helloworld", password2 = "hitunisia", passwordadmin = "administrator",
					cryptedPassword1 = "", cryptedPassword2 = "", cryptedPasswordadmin = "";
			cryptedPassword1 = encoder.encode(password1);
			cryptedPassword2 = encoder.encode(password2);
			cryptedPasswordadmin = encoder.encode(passwordadmin);
			System.out.println("cryptedPassword1 " + cryptedPassword1 + " &cryptedPassword2 " + cryptedPassword2);
			// setting user role
			User admin = new User("admin", "admin@g.com", cryptedPasswordadmin);
			User mohamed = new User("mohamed", "mou@g.com", cryptedPassword2);
			User siwar = new User("siwar", "siwar@g.com", cryptedPassword1);

			Set<Role> rolesadmin = new HashSet<>();
			Set<Role> rolesmoderator = new HashSet<>();
			rolesadmin.add(role3);
			rolesmoderator.add(role2);
			/*
			 * adminRole.setName(ERole.ROLE_ADMIN); modRole.setName(ERole.ROLE_MODERATOR);
			 * /* roleRepository.save(adminRole); roleRepository.save(modRole);
			 * 
			 * rolesadmin.add(adminRole); rolesmoderator.add(modRole);
			 */
			admin.setRoles(rolesadmin);
			System.out.println("roles admin");
			admin.getRoles().forEach(r -> {
				System.out.println(r.toString());
			});
			mohamed.setRoles(rolesmoderator);
			siwar.setRoles(rolesmoderator);
			userrepository.save(admin);
			userrepository.save(mohamed);
			userrepository.save(siwar);
			// Ajout compteur

			Compteur compteur1 = new Compteur();
			Compteur compteur11 = new Compteur();
			compteur1.setLibelle("C-124578");
			compteur11.setLibelle("C-1444578");
			compteur1.setUser(mohamed);
			compteur11.setUser(mohamed);

			Compteur compteur2 = new Compteur();
			Compteur compteur22 = new Compteur();
			compteur2.setLibelle("C-104578");
			compteur22.setLibelle("C-154578");
			compteur2.setUser(siwar);
			compteur22.setUser(siwar);
			compteurrepository.save(compteur1);
			compteurrepository.save(compteur11);
			compteurrepository.save(compteur2);
			compteurrepository.save(compteur22);

			// affichage des compteurs d'un utilisateur x
			compteurrepository.getCompteursByUsername(mohamed.getUsername()).forEach(c -> {
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
			Token token1 = new Token(compteur1, typetoken10, mohamed);
			Token token11 = new Token(compteur11, typetoken20, mohamed);
			tokenrepository.save(token1);
			tokenrepository.save(token11);
			Token token2 = new Token(compteur2, typetoken20, siwar);
			Token token22 = new Token(compteur22, typetoken5, siwar);
			tokenrepository.save(token2);
			tokenrepository.save(token22);

			
			tokenrepository.findAll().forEach(t -> {
				System.out.println(t.toString());
			});

			Panier paniermohamed = new Panier(mohamed, token1,true);
			Panier paniermohamed2 = new Panier(mohamed, token11,true);
			panierRepository.save(paniermohamed);
			panierRepository.save(paniermohamed2);
			
			Panier paniersiwar = new Panier(siwar, token2,false);
			Panier paniersiwar2 = new Panier(siwar, token22,true);
			panierRepository.save(paniersiwar);
			panierRepository.save(paniersiwar2);
			panierRepository.findAll().forEach(p -> {
				System.out.println(p.toString());
			});
			
			Commande commandemohamed=new Commande(mohamed, paniermohamed, new Date());
			Commande commandemohamed2=new Commande(mohamed, paniermohamed2, new Date());
			commandeRepository.save(commandemohamed);
			commandeRepository.save(commandemohamed2);

			Commande commandsiwar22=new Commande(siwar, paniersiwar2, new Date());
			commandeRepository.save(commandsiwar22);

			
			Solde soldemohamed = new Solde(mohamed, 50);
			soldeRepository.save(soldemohamed);
			Solde soldesiwar = new Solde(siwar, 40);
			soldeRepository.save(soldesiwar);
			soldeRepository.findAll().forEach(p -> {
				System.out.println(p.toString());
			});

		
		};
	}

}
