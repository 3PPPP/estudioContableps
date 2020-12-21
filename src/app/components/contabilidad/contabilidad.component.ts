import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.scss']
})
export class ContabilidadComponent implements OnInit {

  constructor() { 
    window.scroll(0, 0);
  }

  ngOnInit(): void {
  }

}
