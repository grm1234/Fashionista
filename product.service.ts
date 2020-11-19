/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model.product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { } //DI for HttpClient

  
  getProductDetailsByType(type: any):Observable<Product[]>{
      return this.httpClient.get<Product[]>("http://localhost:5000/shop/productsT"+type);
  }
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:5000/shop/products");
  }

  getProductsById(id: any): Observable<Product> {
    return this.httpClient.get<Product>("http://localhost:5000/shop/products"+id);
  }
  /*storeProductDetailsInDb(prodRef): Observable<any>{
    //return this.httpClient.post("http://localHost:9090/product/storeProduct",prodRef)
    //.subscribe(result=>console.log(result),error=>console.log(error));
    return this.httpClient.post("http://localHost:9090/product/storeProduct",prodRef);
  }
  deleteProductById(prodId):Observable<any>{
    return this.httpClient.delete("http://localHost:9090/product/deleteProduct/"+prodId);
  }
  updateProductDetailsFromDb(prodRef):Observable<any>{
    return this.httpClient.put("http://localHost:9090/product/updateProduct", prodRef)
  }
}*/
import { Product } from './model.product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // URL to web api
  private productsUrl = 'http://localhost:5000/shop/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductsById(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
  }

  getProductDetailsByType(type: any):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:5000/shop/productsT"+type);
}
  /*addProducts(products: Product): Observable<any> {
    return this.http.post<any>(this.productsUrl, products, httpOptions);
  }

  updateProductsById(products: Products, id: any): Observable<Products> {
    return this.http.put<Products>(`${this.productsUrl}/${id}`, products, httpOptions);
  }

  deleteProductsById(id: any): Observable<Products> {
    return this.http.delete<Products>(`${this.productsUrl}/${id}`);
  }*/

}