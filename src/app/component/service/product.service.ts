import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../type/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
  getDetail(id: any): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:3000/products/' + id)
  }
  deleteProduct(id: any): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:3000/products/' + id)
  }
  addProduct(product: any): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:3000/products', product)
  }
  updateProduct(product: any): Observable<IProduct> {
    return this.http.patch<IProduct>(`http://localhost:3000/products/${product.id}`, product)
  }

}
