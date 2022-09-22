package com.pack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

import com.pack.models.StatistiqueMensuel;
import com.pack.models.Typetoken;


@RestController
public interface StatistiqueMensuelRepository extends JpaRepository<StatistiqueMensuel, Long> {

}
