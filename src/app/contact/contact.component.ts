import { Component, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('textarea') textarea: ElementRef;
  @ViewChild('button') buttonContact: ElementRef;
  @ViewChild('mailField') mailField:ElementRef; 



  async sendMail() {
    // action="https://f014ddff@sinan-fischer.developerakademie.net/Send_mail/send_mail.php" 

    let nameField = this.nameField.nativeElement;
    let textarea = this.textarea.nativeElement;
    let buttonContact = this.buttonContact.nativeElement;
    let mailField = this.mailField.nativeElement; 

    // Animation anzeigen 
    let fd = new FormData(); 
    fd.append('name', nameField.value); 
    fd.append('message', textarea.value + mailField.value); 
    // send

    await fetch('https://sinan-fischer.developerakademie.net/Send_mail/send_mail.php',
    {
      method: 'POST',
      body: fd 
    }); 

    //Text anzeigen nachricht gesendet!
    nameField.value = '';
    mailField.value = '';
    textarea.value = '';
    buttonContact.value = '';
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
        //reveals[i].classList.remove("active");
      }
    }
  }
}
