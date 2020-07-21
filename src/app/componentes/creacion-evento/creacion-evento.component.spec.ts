import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionEventoComponent } from './creacion-evento.component';

describe('CreacionEventoComponent', () => {
  let component: CreacionEventoComponent;
  let fixture: ComponentFixture<CreacionEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
