import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { MaterialModule } from 'src/app/shared/material-module/material.module';



@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProductsModule { }
