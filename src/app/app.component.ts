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
    window.addEventListener("resize", () => {
      this.displayWindowSize();
    });
  }

  displayWindowSize() {
    this.isMobile = window.innerWidth < 700 ? true : false;
  }

}
