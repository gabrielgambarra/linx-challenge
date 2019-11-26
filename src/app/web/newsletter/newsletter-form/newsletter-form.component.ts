import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {

  isMobile: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth < 700 ? true : false;
  }

}
