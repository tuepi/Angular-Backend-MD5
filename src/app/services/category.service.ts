import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";

const API_URL = 'http://localhost:8080/api/categories'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(API_URL);
  }

}
