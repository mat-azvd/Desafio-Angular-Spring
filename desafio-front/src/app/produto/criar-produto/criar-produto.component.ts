import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})

export class CriarProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  submitted = false;

  constructor(
    private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit() {}

  newProduto(): void {
    this.submitted = false;
    this.produto = new Produto();
  }

  save() {
    this.produtoService
    .createProduto(this.produto).subscribe(data => {
      console.log(data)
      this.produto = new Produto();
      this.getList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  getList() {
    this.router.navigate(['/produtos']);
  }

}
