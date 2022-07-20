import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../models/category";
import {Product} from "../../models/product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categories: Category[] | any;
  product : Product | any;
  id : any;

  constructor(private productService : ProductService,
              private categoryService : CategoryService,
              private router : Router) { }

  createForm: FormGroup = new FormGroup({
    name : new FormControl(),
    price : new FormControl(),
    category : new FormControl(),
  });

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    }, error => {
      console.log(error);
    });
  }

  create() {
    this.product = {
      name : this.createForm.value.name,
      price : this.createForm.value.price,
      category : {
        id : this.createForm.value.category
      },
    }
    this.productService.create(this.product).subscribe(() => {
      alert("ok");
      this.router.navigateByUrl('/')
    }, error => {
      console.log(error);
    });


  }

}
