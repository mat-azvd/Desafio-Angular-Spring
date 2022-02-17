import { Component, OnInit } from '@angular/core';
import {Produto} from '../produto';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {ProdutoService} from '../produto.service'
import {DetalhesProdutoComponent} from '../detalhes-produto/detalhes-produto.component'

import {MatDialog, MatDialogConfig} from '@angular/material/dialog'

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})


export class ListaProdutoComponent implements OnInit {

  produto: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService,
    //private router: Router,
    private dialog: MatDialog) {}

  ngOnInit() {
    this.reloadData();

  }

  reloadData() {
    this.produto = this.produtoService.getListaProduto();
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(DetalhesProdutoComponent, dialogConfig);

  }

}

//this.router.navigate(['detalhes', id]);