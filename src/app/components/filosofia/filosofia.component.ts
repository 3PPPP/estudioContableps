import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filosofia',
  templateUrl: './filosofia.component.html',
  styleUrls: ['./filosofia.component.scss']
})
export class FilosofiaComponent implements OnInit {

  constructor() { 
    window.scroll(0, 0);
  }

  ngOnInit(): void {
  }

}
