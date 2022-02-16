//REST API

package com.desafio.desafioback.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.desafioback.exception.ProdutoException;
import com.desafio.desafioback.model.Produto;
import com.desafio.desafioback.repositorio.ProdutoRepositorio;


@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")

public class ProdutosController {

    @Autowired
    private ProdutoRepositorio produtoRepositorio;

    @GetMapping("/produtos")
    public List<Produto> getAllProdutos() {
        return produtoRepositorio.findAll();
    }

    @GetMapping("/produtos/{id}")
    public ResponseEntity<Produto> getProdutoById(@PathVariable(value = "id") Long produtoId)
        throws ProdutoException {
            Produto produto = produtoRepositorio.findById(produtoId)
          .orElseThrow(() -> new ProdutoException("Produto nao encontrado com este ID: " + produtoId));
        return ResponseEntity.ok().body(produto);
    }

    @PostMapping("/produtos")
    public Produto createProduto(@Valid @RequestBody Produto produto) {
        return produtoRepositorio.save(produto);
    }

    @PutMapping("/produtos/{id}")
    public ResponseEntity<Produto> updateProduto(@PathVariable(value = "id") Long  produtoId,
         @Valid @RequestBody Produto produtoDetalhes) throws ProdutoException {
            Produto produto = produtoRepositorio.findById(produtoId)
        .orElseThrow(() -> new ProdutoException("Produto nao encontrado com o ID: " + produtoId));

        produto.setNome(produtoDetalhes.getNome());
        produto.setPreco(produtoDetalhes.getPreco());
        produto.setCodigo(produtoDetalhes.getCodigo());
        produto.setCategoria(produtoDetalhes.getCategoria());
        produto.setStatus(produtoDetalhes.getStatus());
        final Produto updateProduto = produtoRepositorio.save(produto);
        return ResponseEntity.ok(updateProduto);
    }

    @DeleteMapping("/produtos/{id}")
    public Map<String, Boolean> deleteProduto(@PathVariable(value = "id") Long produtoId)
         throws ProdutoException {
        Produto produto = produtoRepositorio.findById(produtoId)
       .orElseThrow(() -> new ProdutoException("Produto nao encontrado com o ID: " + produtoId));

       produtoRepositorio.delete(produto);
        Map<String, Boolean> response = new HashMap<>();
        response.put("DELETADO", Boolean.TRUE);
        return response;
    }
    
    
}
