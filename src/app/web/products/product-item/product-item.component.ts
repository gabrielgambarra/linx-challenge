import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/providers/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input('product') product: Product;

  constructor() { }

  ngOnInit() {
  }

  // This function returns the path to image of product
  getImageURL(): string {
    return this.product.image;
  }

}
