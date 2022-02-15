package com.desafio.desafioback.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.desafio.desafioback.Model.Produto;

@Repository
public interface ProdutoRepositorio extends JpaRepository<Produto, Long>{

}
