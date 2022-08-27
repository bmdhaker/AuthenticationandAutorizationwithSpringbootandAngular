package com.pack.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CentreRecharge {
	long id;
	private String libelle;
	private Gouvernorat gouvernorat;

	// private String gouvernorat;

	public CentreRecharge() {

	}


	


	public CentreRecharge(String libelle, Gouvernorat gouvernorat) {
		super();
		this.libelle = libelle;
		this.gouvernorat = gouvernorat;
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
	@JoinColumn(name = "id_gouvernorat", nullable = false)

	public Gouvernorat getGouvernorat() {
		return gouvernorat;
	}

	public void setGouvernorat(Gouvernorat gouvernorat) {
		this.gouvernorat = gouvernorat;
	}

	

	public String getLibelle() {
		return libelle;
	}





	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}





	@Override
	public String toString() {
		return "CentreRecharge [id=" + id + ", libelle=" + libelle + ", gouvernorat=" + gouvernorat + "]";
	}



}
