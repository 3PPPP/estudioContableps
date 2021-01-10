import { Component, OnInit, TemplateRef } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  FormContacto!: FormGroup;
  submitted = false;
  modalRef!: BsModalRef;


  constructor(
    public _MessageService: MessageService,
    public formBuilder: FormBuilder,
    private modalService: BsModalService,
    private contact: ContactService
  ) {

    window.scroll(0, 0);

  }

  ngOnInit(): void {

    this.FormContacto = this.formBuilder.group({
      Nombre: new FormControl(
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(55)]
      ),
      Email: [
        "",
        [Validators.required, Validators.email]
      ],
      Asunto: [
        null
      ],
      Mensaje: [
        null
      ]
    });


  }

  contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() => {
      console.log("Mensaje enviado")
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    window.scroll(0, 0);
    /*this.FormContacto = this.formBuilder.group({
      Nombre: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(55)]
      ],
      Email: [
        "",
        [Validators.required, Validators.email]
      ],
      Asunto: [
        null
      ],
      Mensaje: [
        null
      ]

    });*/
  }

  onSubmit(FormContacto: any) {
    console.log(FormContacto)
    this.contact.PostMessage(FormContacto)
      .subscribe(response => {
        //location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }


}
