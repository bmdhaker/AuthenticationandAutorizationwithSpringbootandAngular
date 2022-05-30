package com.pack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

import com.pack.models.Formateur;


@RestController
public interface FormateurRepository extends JpaRepository<Formateur, Long> {

}
