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
public class StatistiqueMensuel {
	long id;
	int mois;
	int annee;
	int nb;
	
	public StatistiqueMensuel() {
	}

	public StatistiqueMensuel(int mois, int annee, int nb) {
		super();
		this.mois = mois;
		this.annee = annee;
		this.nb = nb;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


	public int getMois() {
		return mois;
	}


	public void setMois(int mois) {
		this.mois = mois;
	}


	public int getAnnee() {
		return annee;
	}


	public void setAnnee(int annee) {
		this.annee = annee;
	}


	public int getNb() {
		return nb;
	}

	public void setNb(int nb) {
		this.nb = nb;
	}

	@Override
	public String toString() {
		return "StatistiqueMensuel [id=" + id + ", mois=" + mois + ", annee=" + annee + ", nb=" + nb + "]";
	}
}
