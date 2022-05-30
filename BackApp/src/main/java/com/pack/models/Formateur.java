package com.pack.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Formateur {
	long id;
	String nom, prenom;
	String code;
	String telephone;
	String raison_socill;
	String adresse;
	String fax;

	public Formateur() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Formateur(String nom, String prenom, String code, String telephone, String raison_socill, String adresse,
			String fax) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.code = code;
		this.telephone = telephone;
		this.raison_socill = raison_socill;
		this.adresse = adresse;
		this.fax = fax;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getTéléphone() {
		return telephone;
	}

	public void setTéléphone(String téléphone) {
		this.telephone = téléphone;
	}

	public String getRaison_socill() {
		return raison_socill;
	}

	public void setRaison_socill(String raison_socill) {
		this.raison_socill = raison_socill;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	@Override
	public String toString() {
		return "Formateur [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", code=" + code + ", telephone="
				+ telephone + ", raison_socill=" + raison_socill + ", adresse=" + adresse + ", fax=" + fax + "]";
	}

}
