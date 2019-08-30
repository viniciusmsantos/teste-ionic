import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEventoPage } from './detalhes-evento.page';

describe('DetalhesEventoPage', () => {
  let component: DetalhesEventoPage;
  let fixture: ComponentFixture<DetalhesEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
