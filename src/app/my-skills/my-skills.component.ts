import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  constructor(private responsive: BreakpointObserver) {
  }
 
  skills = [
    {
      'name' : 'TypeScript',
      'img' : '../assets/img/icons/typescript.png',
    },
    {
      'name' : 'Angular',
      'img' : '../assets/img/icons/angular.png',
    },
    {
      'name' : 'Firebase',
      'img' : '../assets/img/icons/firebase.png',
    },
    {
      'name' : 'HTML',
      'img' : '../assets/img/icons/html.png',
    },
    {
      'name' : 'CSS',
      'img' : '../assets/img/icons/css.png',
    },
    {
      'name' : 'JavaScript',
      'img' : '../assets/img/icons/javascript.png',
    },
    {
      'name' : 'GIT',
      'img' : '../assets/img/icons/git.png',
    },
    {
      'name' : 'Material Design',
      'img' : '../assets/img/icons/material-design.png',
    },
    {
      'name' : 'Scrum',
      'img' : '../assets/img/icons/scrum.png',
    },
    {
      'name' : 'Rest-Api',
      'img' : '../assets/img/icons/api.png',
    },
    {
      'name' : 'Wordpress',
      'img' : '../assets/img/icons/wordpress.png',
    },
  ];

  @Input() isMediumView:boolean;  




  reveal() {
    var reveals = document.querySelectorAll(".reveal");

  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
       
      } else {
        //reveals[i].classList.remove("active");
      }
    }
  }


  ngOnInit() {
  }


}
