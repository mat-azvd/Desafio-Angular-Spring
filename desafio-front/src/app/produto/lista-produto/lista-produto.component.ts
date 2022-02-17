import { Component, OnInit } from '@angular/core';
import {Produto} from '../produto';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {ProdutoService} from '../produto.service'
import {DetalhesProdutoComponent} from '../detalhes-produto/detalhes-produto.component'

import {UpdateProdutoComponent} from '../update-produto/update-produto.component'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import {MatTableDataSource} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})


export class ListaProdutoComponent implements OnInit {

  produto: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService,
    //private router: Router,
    private dialog: MatDialog) {
      this.produtoService.atualiza().subscribe((m:any)=>{
        console.log(m);
        this.reloadData();
      })
    }

    public displayedColumns: string[] = ['nome','preco','codigo','categoria','status','idDelete','idUpdate'];

    public dataSource = new MatTableDataSource<Produto>();

    

  ngOnInit() {
    this.reloadData();
    console.log(this.produto);
  }

  reloadData() {
    this.produto = this.produtoService.getListaProduto();
    this.produtoService.getListaProduto().subscribe((res) =>{
    console.log(res);
    this.dataSource.data = res;
    })
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

  updateProduto(id: number){ 
    console.log(id);  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.data = id;
    console.log(dialogConfig.data);
    this.dialog.open(UpdateProdutoComponent, dialogConfig);

  }

}

//this.router.navigate(['detalhes', id]);