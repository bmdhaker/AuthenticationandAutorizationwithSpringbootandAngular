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
	String numCompteur;
	private Typetoken typetoken;
	// private String typetoken;

	public Token() {

	}


	public Token(String numCompteur, Typetoken typetoken) {
		super();
		this.numCompteur = numCompteur;
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


	public String getNumCompteur() {
		return numCompteur;
	}


	public void setNumCompteur(String numCompteur) {
		this.numCompteur = numCompteur;
	}


	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_typetoken", nullable = false)

	public Typetoken getTypetoken() {
		return typetoken;
	}

	public void setTypetoken(Typetoken typetoken) {
		this.typetoken = typetoken;
	}


	@Override
	public String toString() {
		return "Token [id=" + id + ", numCompteur=" + numCompteur + ", typetoken=" + typetoken + "]";
	}


}
