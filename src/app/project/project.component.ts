import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  projects = [
    {
      'title' : 'El pollo loco',
      'img' : '../assets/img/pollo-loco.png',
      'skills' : 'Javascript | HTML | CSS ',
      'description' : 'A short but fun platformer game where the player jumps over chickens to defeat the big boss chicken and win back the stolen taco.',
      'livetest' : 'https://sinan-fischer.developerakademie.net/el_polo_loco/index.html',
      'git' : 'https://github.com/SinanFischer/el-polo-loco', 
    },
    {
      'title' : 'JOIN',
      'img' : '../assets/img/join.png',
      'skills' : 'Javascript | HTML | CSS ',
      'description' : 'Our self-programmed Kanban web app. This app allows a team to easily organize and prioritize their tasks with a simple yet effective drag-and-drop interface.',
      'livetest' : '#',
      'git' : 'https://github.com/SinanFischer/join', 
    },
    {
      'title' : 'Ring of Fire',
      'img' : '../assets/img/pokedex.png',
      'skills' : 'Javascript | HTML | CSS | ANGULAR',
      'description' : 'A recreation of the world famous drinking game "Ring of fire". Players draw cards with different tasks and challenges and have to perform them. From fun drinking tasks to challenges, each round brings new surprises.',
      'livetest' : '#',
      'git' : 'https://github.com/SinanFischer/Ring-of-fire', 
    },
  ]; 

  @Input() isMediumView:boolean; 


   isEven(n:number) {
    return n % 2 == 0;
 }

  isOdd(n:number) {
    return Math.abs(n % 2) == 1;
 }

 reveal() {
  var reveals = document.querySelectorAll(".reveal");


  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
     
    } else {
      reveals[i].classList.remove("active");
    }
  }
}



}
