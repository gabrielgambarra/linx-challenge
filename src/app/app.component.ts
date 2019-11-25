import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isMobile: boolean = false;
  
  ngOnInit(): void {
    // Check if screen mobile to apply responsiveness
    this.isMobile = window.innerWidth < 700 ? true : false;
  }

}
