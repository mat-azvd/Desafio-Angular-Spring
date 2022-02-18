import { Component, OnInit, Inject } from '@angular/core';
import {inject} from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoService } from '../produto/produto.service';
import { Router } from '@angular/router';
import { Produto } from '../produto/produto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.scss']
})
export class MatConfirmDialogComponent implements OnInit {

  produto: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  deleteProduto(id: number){
    this.produtoService.deleteProduto(id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['produtos', id]);
        },
        error => console.log(error));
  }

}
