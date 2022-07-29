import {Category} from "./category";

export interface Product {
  id? : string;
  name? : string;
  price? : string;
  category : Category;
  image? : string
}
