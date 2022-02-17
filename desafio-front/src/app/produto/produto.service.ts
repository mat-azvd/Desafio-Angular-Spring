//Produto.Service metodos para pegar os dados do backend chamando spring boot api

import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:8080/desafio/api/produtos';

  constructor(private http: HttpClient) { }

  createProduto(produto: Object): Observable<object> {

    return this.http.post(`${this.baseUrl}`, produto);
  }

  getProduto(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getListaProduto(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateProduto(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  private atualizador = new Subject<any>();
  atualiza(): Observable<any> {
    return this.atualizador.asObservable();
  }

  filter(filterBy: string){
    this.atualizador.next(filterBy);
  }


}
