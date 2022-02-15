package com.desafio.desafioback.repositorio;

import com.desafio.desafioback.model.Produto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepositorio extends JpaRepository<Produto, Long>{

}
