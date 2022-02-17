import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ListaProdutoComponent } from '../lista-produto/lista-produto.component';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})

export class DetalhesProdutoComponent implements OnInit {

  id: number;
  produto: Produto;
  mostrar: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, 
    private produtoService: ProdutoService,
    public dialogbox: MatDialogRef<DetalhesProdutoComponent>) { }

  ngOnInit() {

    this.produto = new Produto();

    this.id = this.route.snapshot.params['id'];

    this.produtoService.getProduto(this.id)
      .subscribe(data => {
        console.log(data)
        this.produto = data;
      }, error => console.log(error));

  }

  onClose(){
    this.dialogbox.close();
  }


}

//this.router.navigate(['produtos']);