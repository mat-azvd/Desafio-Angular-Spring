import { Component, Inject, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

import { Produto } from '../produto';
import { ActivatedRoute, Router } from '@angular/router';

import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.scss']
})
export class UpdateProdutoComponent implements OnInit {

  id: number;
  produto: Produto;
  submitted = false;
  dado: number;

  //categorias: string[] = ['A', 'B', 'C', 'D'];


  constructor(private route: ActivatedRoute,private router: Router,
    private produtoService: ProdutoService,
    public dialogbox: MatDialogRef<UpdateProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) data: any ) { 
      this.dado=data;
    }

  ngOnInit() {

    console.log(this.dado)
    this.produto = new Produto();

    this.id = this.dado;

    

    this.produtoService.getProduto(this.id)
    .subscribe(data => {
      console.log(data)
      this.produto = data;
    }, error => console.log(error));

  }

  updateProduto(id: number) {
    this.produtoService.updateProduto(this.id, this.produto)
      .subscribe(data => {
        console.log(data);
        this.produto = new Produto();
        this.getList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateProduto(this.id);    
  }

  getList() {
    this.router.navigate(['/produtos']);
  }

  onClose(){
    this.produtoService.filter('Atualiza');
    this.dialogbox.close();
    
  }

}
