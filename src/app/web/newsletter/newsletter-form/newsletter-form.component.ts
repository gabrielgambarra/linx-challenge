import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Email } from 'src/app/providers/models/email.model';
import { NewsletterService } from 'src/app/providers/services/newsletter.service';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  isMobile: boolean = false;
  email = new FormControl(null);
  name = new FormControl(null);
  body = new Email();

  constructor(
    private emailService: NewsletterService
  ) { }

  ngOnInit() {
    this.isMobile = window.innerWidth < 700 ? true : false;
    window.addEventListener("resize", () => {
      this.displayWindowSize();
    })
  }

  // This function will send the name and email given by user and send a example email
  send(): void {

    // Check if user typed name and email. If not, the button will make nothing
    if (this.name.value && this.email.value) {

      this.body.name = this.name.value;
      this.body.email = this.email.value;

      this.emailService.sendEmail(this.body).subscribe(success => {
      });
    }

    return;
  }

  displayWindowSize() {
    this.isMobile = window.innerWidth < 700 ? true : false;
  }

}
