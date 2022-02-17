import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

import { Produto } from '../produto';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.scss']
})
export class UpdateProdutoComponent implements OnInit {

  id: number;
  produto: Produto;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private produtoService: ProdutoService,
    public dialogbox: MatDialogRef<UpdateProdutoComponent>) { }

  ngOnInit() {

    this.produto = new Produto();

    this.id = this.route.snapshot.params['id'];

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
    this.dialogbox.close();
  }

}
