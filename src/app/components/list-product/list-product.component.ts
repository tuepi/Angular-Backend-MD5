import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  // @Input()
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
    }, error => {
      console.log("Lỗi");
    });
  }

  displayList(products : any) {
    this.products = products;
  }

  deleteProduct(id : any) {
    if (confirm("Bạn có xác nhận xóa?")) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.router.navigateByUrl('/')
        this.getAll();
      }, error => {
        console.log(error);
      });
    }
  }

}
