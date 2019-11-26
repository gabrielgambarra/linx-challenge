import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { MaterialModule } from './shared/material-module/material.module';
import { MainComponent } from './web/main/main/main.component';
import { NewsletterFormComponent } from './web/newsletter/newsletter-form/newsletter-form.component';
import { ProductsListComponent } from './web/products/products-list/products-list.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewsletterFormComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
