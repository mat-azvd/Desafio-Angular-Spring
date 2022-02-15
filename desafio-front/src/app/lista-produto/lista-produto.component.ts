import { Component, OnInit } from '@angular/core';
import {Produto} from '../criar-produto/produto';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {ProdutoService} from '../produto.service'
import {DetalhesProdutoComponent} from '../detalhes-produto/detalhes-produto.component'

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})


export class ListaProdutoComponent implements OnInit {

  produto: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();

  }

  reloadData() {
    this.produto = this.produtoService.getProdutoList();
  }

  deleteProduto(id: number) {
    this.produtoService.deleteProduto(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  produtoDetalhes(id: number){
    this.router.navigate(['detalhes', id]);
  }

}
