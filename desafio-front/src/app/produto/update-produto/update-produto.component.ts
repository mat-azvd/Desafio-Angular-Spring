import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

import { Produto } from '../produto';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {

  id: number;
  produto: Produto;

  constructor(private route: ActivatedRoute,private router: Router,
    private produtoService: ProdutoService) { }

  ngOnInit() {

    this.produto = new Produto();

    this.id = this.route.snapshot.params['id'];

    this.produtoService.getProduto(this.id)
    .subscribe(data => {
      console.log(data)
      this.produto = data;
    }, error => console.log(error));

  }

  updateProduto() {
    this.produtoService.updateProduto(this.id, this.produto)
      .subscribe(data => {
        console.log(data);
        this.produto = new Produto();
        this.getList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateProduto();    
  }

  getList() {
    this.router.navigate(['/produtos']);
  }

}
