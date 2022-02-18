import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import {Produto} from '../produto';
import { Observable,merge } from "rxjs";
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';
import {ProdutoService} from '../produto.service'
import {DetalhesProdutoComponent} from '../detalhes-produto/detalhes-produto.component'

import {UpdateProdutoComponent} from '../update-produto/update-produto.component'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import {MatTableDataSource} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DialogService} from 'src/app/dialog.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})


export class ListaProdutoComponent implements OnInit, AfterViewInit {

  produto: Observable<Produto[]>;
  //sort: MatSort;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private produtoService: ProdutoService,
    //private router: Router,
    private dialogService: DialogService,
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
    
    console.log(this.paginator);
    console.log(this.dataSource.paginator);
  }

  reloadData() {
    this.produto = this.produtoService.getListaProduto();
    this.produtoService.getListaProduto().subscribe((res) =>{
    console.log(res);
    this.dataSource.data = res;
    })
  }

  deleteProduto(id: number) {
    //this.dialogService.openConfirmDialog()
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

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator);
    this.dataSource.sort = this.sort;


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

}


/*applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

this.router.navigate(['detalhes', id]);

this.dataSource.sort = this.sort;

this.produtoService.deleteProduto(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
*/