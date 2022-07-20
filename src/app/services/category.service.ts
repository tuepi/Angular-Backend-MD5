import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";

const API_URL = 'http://localhost:8081/api/categories'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient : HttpClient) { }

  // @ts-ignore
  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API_URL);
  }

}
