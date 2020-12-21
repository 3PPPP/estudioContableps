import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public _MessageService: MessageService) { }

  ngOnInit(): void {
  }

  contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() => {
    console.log("Mensaje enviado")
    });
  }

}
