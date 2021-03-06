package com.pack.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Token {
	long id;
	private Compteur compteur;
	private Typetoken typetoken;
	// private String typetoken;

	public Token() {

	}

	public Token(Compteur compteur, Typetoken typetoken) {
		super();
		this.compteur = compteur;
		this.typetoken = typetoken;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_typetoken", nullable = false)

	public Typetoken getTypetoken() {
		return typetoken;
	}

	public void setTypetoken(Typetoken typetoken) {
		this.typetoken = typetoken;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_compteur", nullable = false)
	public Compteur getCompteur() {
		return compteur;
	}

	public void setCompteur(Compteur compteur) {
		this.compteur = compteur;
	}

	@Override
	public String toString() {
		return "Token [id=" + id + ", compteur=" + compteur + ", typetoken=" + typetoken + "]";
	}



}
