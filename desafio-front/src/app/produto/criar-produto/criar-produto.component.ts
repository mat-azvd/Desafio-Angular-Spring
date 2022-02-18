import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {MatDialog, MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})

export class CriarProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  form: FormGroup;

  submitted = false;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    public dialogbox: MatDialogRef<CriarProdutoComponent>,
    private dialogRef: MatDialog,
    private fb: FormBuilder) { }


  ngOnInit(){
  }

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

  onClose(){
    this.dialogbox.close()
    this.produtoService.filter('Atualiza');
       
  }

 
  
  /*
   reloadData() {
    this.produto = this.produtoService.getListaProduto();
    this.router.navigate(['/produtos']);
  }
  const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(CriarProdutoComponent, dialogConfig);
*/
  }
