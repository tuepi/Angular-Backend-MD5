import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../models/category";
import {Product} from "../../models/product";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

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
              private router : Router,
              private storage: AngularFireStorage) { }

  createForm: FormGroup = new FormGroup({
    name : new FormControl(),
    price : new FormControl(),
    category : new FormControl(),
    image : new FormControl()
  });

  ngOnInit(): void {
    this.productService.getAll();
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
      image : this.fb
    }
    this.productService.create(this.product).subscribe(() => {
      alert("ok");
      this.router.navigateByUrl('/')
      // @ts-ignore
      $("#exampleModal").modal("hide")
    }, error => {
      console.log(error);
    });
  }

  title = "cloudsStorage";
  selectedFile:any;
  fb : any;
  downloadURL: Observable<string> | any;
  onFileSelected(event : any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url : any) => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

}
