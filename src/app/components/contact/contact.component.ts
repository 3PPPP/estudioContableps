import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  FormContacto!: FormGroup;
  submitted = false;


  constructor(
    public _MessageService: MessageService,
    public formBuilder: FormBuilder,
    ) { 
    
    window.scroll(0, 0);

  }

  ngOnInit(): void {

    this.FormContacto = this.formBuilder.group({
      Nombre: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(55)]
      ],
      Email: [
        "",
        [Validators.required, Validators.email]
      ],

    });


  }

  contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() => {
    console.log("Mensaje enviado")
    });
  }

}
