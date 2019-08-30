import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraFinalizadaPage } from './compra-finalizada.page';

describe('CompraFinalizadaPage', () => {
  let component: CompraFinalizadaPage;
  let fixture: ComponentFixture<CompraFinalizadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraFinalizadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraFinalizadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
