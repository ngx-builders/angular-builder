import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  desktopViewWidth : number = 1000;
  showNavbar: boolean = false;
  get isOpened() { return this.showNavbar; }
  
  constructor() {}

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.showNavbar =  width >= this.desktopViewWidth;
  }
  
}
