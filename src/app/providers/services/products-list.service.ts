import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductObj } from '../models/product-obj.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  private productsUrl = environment.apiUrl;
  private page: number = 0;

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<ProductObj> {
    this.page++;
    return this.http.get<ProductObj>(`${this.productsUrl}${this.page}`);
  }
}
