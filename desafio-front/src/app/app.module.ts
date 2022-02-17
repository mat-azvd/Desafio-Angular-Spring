import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarProdutoComponent } from './produto/criar-produto/criar-produto.component';
import { DetalhesProdutoComponent } from './produto/detalhes-produto/detalhes-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { UpdateProdutoComponent } from './produto/update-produto/update-produto.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CriarProdutoComponent,
    DetalhesProdutoComponent,
    ListaProdutoComponent,
    UpdateProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DetalhesProdutoComponent]
})
export class AppModule { }
