import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEventoPage } from './menu-evento.page';

describe('MenuEventoPage', () => {
  let component: MenuEventoPage;
  let fixture: ComponentFixture<MenuEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
