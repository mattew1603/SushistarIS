import {ProductCategory} from './product-category';

export interface Product {
  id: number;
  productName: string;
  price: number;
  description: string;
  amount: number;
  category: ProductCategory;
}
