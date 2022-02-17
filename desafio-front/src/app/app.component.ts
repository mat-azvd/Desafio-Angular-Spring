import { Component } from '@angular/core';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { CriarProdutoComponent } from './produto/criar-produto/criar-produto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafio-front';

  constructor(private dialog: MatDialog){}

  createProduto() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(CriarProdutoComponent, dialogConfig);
  }

}
