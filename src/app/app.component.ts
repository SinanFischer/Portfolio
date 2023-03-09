import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, HostListener, OnInit, Renderer2, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myPortfolio';
  
  isXsmallViewParent = false; // max-width: 600px 
  isSmallViewParent = false; // max-width: 960 - 1270px
  isMediumViewParent = false; // max-width: 960px 

  constructor(private renderer: Renderer2, private elem: ElementRef, private responsive: BreakpointObserver) { }


  ngOnInit(): void {
    this.checkResponsive();
  }


  // sets observable Viewports  
  checkResponsive() {
    this.responsive.observe([
      Breakpoints.Medium,
      Breakpoints.Small, 
      Breakpoints.XSmall,
    ])
      .subscribe(result => {
        this.checkViewports(result);
        console.log(result); 
      });
  }

  // checks which breakpoint is called
  checkViewports(result) {

    this.isMediumViewParent = false;
    this.isSmallViewParent = false; 

    const breakpoints = result.breakpoints;
    if (breakpoints[Breakpoints.Medium]) {
      this.isMediumViewParent = true;
    }
    else if (breakpoints[Breakpoints.Small]) {
      this.isSmallViewParent = true; 
      this.isMediumViewParent = true;
    
    }
    else if (breakpoints[Breakpoints.XSmall]) { // max-width 600px  
      this.isXsmallViewParent = true;
      this.isSmallViewParent = true; 
      this.isMediumViewParent = true; 
    }
  }


// for navigation color in navbar 
@HostListener('window:scroll', ['$event']) // for window scroll events
onScroll() {
  let section = this.elem.nativeElement.querySelectorAll('section');
  let menu = document.querySelectorAll('header nav a');

  section.forEach(i => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150; // length from top of the viewport
    let height = i.offsetHeight; // is the height of sections
    let id = i.getAttribute('id'); // in this case gets id from html tag
    if (top >= offset && top < offset + height) {

      menu.forEach(link => {
        link.classList.remove('nav-mark')
        document.querySelector('header nav a[href*=' + id + ']')
          .classList.add('nav-mark');
      });
    }
  });
}


  


   
}
