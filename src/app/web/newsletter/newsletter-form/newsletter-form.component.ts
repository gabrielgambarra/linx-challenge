import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Email } from 'src/app/providers/models/email.model';
import { NewsletterService } from 'src/app/providers/services/newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  isMobile: boolean = false;
  email = new FormControl('');
  name = new FormControl('');
  body = new Email();

  constructor(
    private emailService: NewsletterService
  ) { }

  ngOnInit() {
    this.isMobile = window.innerWidth < 700 ? true : false;
  }

  // This function will send the name and email given by user and send a example email
  send(): void {
    this.body.name = this.name.value;
    this.body.email = this.email.value;

    this.emailService.sendEmail(this.body).subscribe(success => {
    });
  }

}
