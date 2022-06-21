package com.pack.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Compteur {
	long id;
	String libelle;
	// private User user;

	public Compteur() {
	}


	public Compteur(String libelle) {
		super();
		this.libelle = libelle;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


	public String getLibelle() {
		return libelle;
	}


	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}


	@Override
	public String toString() {
		return "Compteur [id=" + id + ", libelle=" + libelle + "]";
	}


	/*
	 * @ManyToOne(fetch = FetchType.EAGER)
	 * 
	 * @JoinColumn(name = "id_user", nullable = false) public User getUser() {
	 * return user; }
	 * 
	 * public void setUser(User user) { this.user = user; }
	 */

}
