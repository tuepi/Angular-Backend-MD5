import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {ListProductComponent} from "../list-product/list-product.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name : any;
  products : Product[] | any;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  findByName(name: any) {
    this.productService.findByName(name).subscribe(result => {
      this.products = result;
    });
  }

}
