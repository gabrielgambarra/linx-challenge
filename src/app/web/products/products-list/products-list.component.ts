import { Component, OnInit } from '@angular/core';
import { ProductObj } from 'src/app/providers/models/product-obj.model';
import { ProductsListService } from 'src/app/providers/services/products-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = new ProductObj();
  nextPage = new ProductObj();

  constructor(
    private productService: ProductsListService
  ) { }

  ngOnInit() {
    this.initList();
  }

  // This function will get the 8 first products from API
  initList(): void {
    this.productService.getProducts().subscribe(
      success => {
        this.products.products = success.products;
      }
    );
  }

  // Load more 8 products from API
  loadMoreProducts(): void {
    this.productService.getProducts().subscribe(
      success => {
        this.nextPage.products = success.products;
        this.products.products = this.products.products.concat(this.nextPage.products);
      }
    )
  }

}
