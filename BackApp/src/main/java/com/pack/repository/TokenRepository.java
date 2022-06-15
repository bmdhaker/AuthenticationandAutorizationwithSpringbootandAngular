package com.pack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

import com.pack.models.Token;


@RestController
public interface TokenRepository extends JpaRepository<Token, Long> {

}
