import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {By} from "@angular/platform-browser";
import {RouterLinkWithHref} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener un link a la página de médicos', function () {
    const fixture = TestBed.createComponent(NavbarComponent);
    const elems = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let existe = false;

    for(const e of elems){
      if(e.attributes['routerLink'] === '/medicos'){
        existe = true;
        break;
      }
    }

    expect(existe).toBeTruthy();
  });
});
