import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {ActivatedRoute, Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  categories: Category[] | any;
  product : Product | any;
  id : any;
  constructor(private productService : ProductService,
              private activatedRoute : ActivatedRoute,
              private categoryService : CategoryService,
              private router : Router) { }

  updateForm: FormGroup = new FormGroup({
    name : new FormControl(),
    price : new FormControl(),
    category : new FormControl(),
  });

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      (categories) => this.categories = categories
    );
    this.activatedRoute.paramMap.subscribe(parammap => {
     this.id = parammap.get('id');
      this.productService.getById(this.id).subscribe(data => {
          this.product = data;
          this.updateForm.patchValue({
            name: data.name,
            price: data.price,
            category: data.category.id
          })
        },
        error => {
          console.log(error);
        });
    });
  }

  editProduct() {
    this.product = {
      name: this.updateForm.value.name,
      price: this.updateForm.value.price,
      category: {
        id: this.updateForm.value.category,
      }
    }
    this.productService.editProduct(this.id, this.product).subscribe(() => {
      this.router.navigateByUrl("/")
      alert("ok")
    }, error => {
      console.log(error)
    })
  }
}
