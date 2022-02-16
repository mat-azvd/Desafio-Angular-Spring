import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ListaProdutoComponent } from '../lista-produto/lista-produto.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})

export class DetalhesProdutoComponent implements OnInit {

  id: number;
  produto: Produto;

  constructor(private route: ActivatedRoute, private router: Router, 
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

  list(){
    this.router.navigate(['produtos']);
  }

}
