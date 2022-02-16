package com.desafio.desafioback.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "produtos")

public class Produto { 
    
    private long id;
    private String nome;
    private double preco;
    private String codigo; 
    private String categoria; 
    private String status;

    

    public Produto(String nome, double preco, String codigo, String categoria, String status) {
        this.nome = nome;
        this.preco = preco;
        this.codigo = codigo;
        this.categoria = categoria;
        this.status = status;
   }

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
       public long getId() {
       return id;
   }
   public void setId(long id) {
       this.id = id;
   }

   //Nome
   @Column(name = "nome", nullable = false)
   public String getNome() {
       return nome;
   }
   public void setNome(String nome) {
       this.nome = nome;
   }

   //Preço
   @Column(name = "preco", nullable = false)
   public double getPreco() {
       return preco;
   }
   public void setPreco(double preco) {
       this.preco = preco;
   }

   //Codigo
   @Column(name = "codigo", nullable = false)
   public String getCodigo() {
       return codigo;
   }
   public void setCodigo(String codigo) {
       this.codigo = codigo;
   }

   //Categoria
   @Column(name = "categoria", nullable = false)
   public String getCategoria() {
       return categoria;
   }
   public void setCategoria(String categoria) {
       this.categoria = categoria;
   }

   //Status
   @Column(name = "status", nullable = false)
   public String getStatus() {
       return status;
   }
   public void setStatus(String status) {
       this.status = status;
   }

   @Override
    public String toString() {
        return "produto [id=" + id + ", nome=" + nome + ", preco=" + preco + ", codigo=" + codigo
       + ", categoria=" + categoria + ", status=" + status + ",]";
    }

}
