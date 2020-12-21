import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public _MessageService: MessageService) { 
    window.scroll(0, 0);
  }

  ngOnInit(): void {
  }

  contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() => {
    console.log("Mensaje enviado")
    });
  }

}
