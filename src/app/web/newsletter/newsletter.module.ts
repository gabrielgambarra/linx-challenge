import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { MaterialModule } from 'src/app/shared/material-module/material.module';
import { FormControl } from '@angular/forms';



@NgModule({
  declarations: [NewsletterFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormControl
  ]
})
export class NewsletterModule { }
