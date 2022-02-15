import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarProdutoComponent,
    DetalhesProdutoComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
