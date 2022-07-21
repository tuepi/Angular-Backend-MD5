import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] | any ;

  constructor(private productService: ProductService,
              private router : Router) {
  }

  ngOnInit(){
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(result => {
      this.products = result;
      console.log(result);
    }, error => {
      console.log("Lỗi");
    });
  }

  deleteProduct(id : any) {
    this.productService.deleteProduct(id).subscribe(() => {
      confirm("Bạn có xác nhận xóa?");
      this.router.navigateByUrl('/')
      this.getAll();
    }, error => {
      console.log(error);
    });
  }

}
