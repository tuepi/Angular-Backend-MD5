import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product : Product | any;
  constructor(private productService : ProductService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parammap => {
      const id = parammap.get('id');
      console.log(id);
    });
  }

}
