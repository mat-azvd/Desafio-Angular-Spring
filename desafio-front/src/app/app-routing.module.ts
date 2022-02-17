import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateProdutoComponent} from './produto/update-produto/update-produto.component';
import {ListaProdutoComponent} from './produto/lista-produto/lista-produto.component';
import {DetalhesProdutoComponent} from './produto/detalhes-produto/detalhes-produto.component';
import {CriarProdutoComponent} from './produto/criar-produto/criar-produto.component';

const routes: Routes = [

  { path: '', redirectTo: 'produtos', pathMatch: 'full'},
  { path: 'produtos', component: ListaProdutoComponent},
  { path: 'criar', component: CriarProdutoComponent},
  { path: 'detalhes/:id', component: DetalhesProdutoComponent},
  { path: 'update/:id', component: UpdateProdutoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
