import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'nxworkspace-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products$!: Observable<Product[]>; 

  constructor( private productService: ProductService) {
    this.ngOnInit
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProduct();
  }
}
