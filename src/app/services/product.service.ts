import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";

const API_URL = 'http://localhost:8080/api/products'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  // @ts-ignore
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL);
  }

  getById(id : any) : Observable<Product> {
    return this.httpClient.get<Product>(API_URL + `/${id}`)
  }

  create(product: any) : Observable<any> {
    return this.httpClient.post(API_URL, product);
  }

  editProduct(id: any , product: any): Observable<any> {
    return this.httpClient.put(API_URL + `/${id}` , product);
  }

  deleteProduct(id : any) : Observable<any> {
    return this.httpClient.delete(API_URL + `${id}`);
  }

}
