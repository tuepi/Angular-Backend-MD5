import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name : any;
  @Input() products : Product[] | any;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  findByName(name: any) {
    this.productService.findByName(name).subscribe(result => {
      console.log(result)
      this.products = result;
    });
  }
}
