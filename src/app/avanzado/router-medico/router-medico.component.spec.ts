import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";

class FakeRouter {
  navigate(params: any){}
}

class FakeActivated{

  private subsject = new Subject();

  push(valor: unknown){
    this.subsject.next(valor);
  }

  get params (){
    return this.subsject.asObservable();
  }

}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        {provide: Router,useClass: FakeRouter },
        {provide: ActivatedRoute, useClass: FakeActivated}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Guardar Médico', function () {
    const router = TestBed.get(Router);
    const spia = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spia).toHaveBeenCalledOnceWith(['medico','123'])
  });

  it('Debe colocar el id= nuevo', function () {

    component = fixture.componentInstance;

    const router:FakeActivated = TestBed.get(ActivatedRoute);

    router.push({id: 'nuevo'});

    expect(component.id).toBe('nuevo')
  });


});
