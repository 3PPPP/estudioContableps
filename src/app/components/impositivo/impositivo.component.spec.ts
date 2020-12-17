import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpositivoComponent } from './impositivo.component';

describe('ImpositivoComponent', () => {
  let component: ImpositivoComponent;
  let fixture: ComponentFixture<ImpositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpositivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
