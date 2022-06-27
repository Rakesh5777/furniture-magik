import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'furniture-magik-clone';
  isMobile: boolean = false;

  ngOnInit(): void {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    this.isMobile = regexp.test(details);
  }

}
