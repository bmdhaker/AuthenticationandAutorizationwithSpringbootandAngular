package com.pack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

import com.pack.models.Compteur;


@RestController
public interface CompteurRepository extends JpaRepository<Compteur, Long> {

}
