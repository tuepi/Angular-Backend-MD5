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
}
