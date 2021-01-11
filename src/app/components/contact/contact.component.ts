import { Component, OnInit, TemplateRef } from '@angular/core';
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
        [Validators.required]
      ),
      Email: [
        "",
        [Validators.required, Validators.email]
      ],
      Asunto: [
        "",
        [Validators.required]
      ],
      Mensaje: [
        "",
        [Validators.required]
      ]
    });


  }


  openModal(template: TemplateRef<any>) {
    window.scroll(0, 0);
    this.submitted = true;
    if (this.FormContacto.invalid) {
      return;
    }
    this.modalRef = this.modalService.show(template);    
  }

  onSubmit(FormContacto: any) {
    this.contact.PostMessage(FormContacto)
      .subscribe(response => {
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

  limpiarForm(){
    this.modalRef.hide();
    this.FormContacto = this.formBuilder.group({
      Nombre: [
        "",
        [Validators.required]
      ],
      Email: [
        "",
        [Validators.required, Validators.email]
      ],
      Asunto: [
        "",
        [Validators.required]
      ],
      Mensaje: [
        "",
        [Validators.required]
      ]

    });
    this.submitted = false;
  }


}
