import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import {By} from "@angular/platform-browser";


xdescribe('Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach( () => {
      TestBed.configureTestingModule({
          declarations: [ IncrementadorComponent ],
          imports: [ FormsModule ]
      });

      fixture = TestBed.createComponent(IncrementadorComponent);
      component = fixture.componentInstance;
  });

  it('Debe de mostrar la leyenda', () => {
    const nombre = 'Jorge';

    component.leyenda = nombre;
    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement
      .query(By.css('h3')).nativeElement;

    expect(elem.innerHTML).toContain(nombre);
  });

  it('Debe decrementar en 5 con el click', () => {

    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    botones[0].triggerEventHandler('click', null);
    botones[1].triggerEventHandler('click', null);

    expect(component.progreso).toBe(50);
  });

  it('Debe decrementar en 5 con el click y verse en progreso', () => {

    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    botones[0].triggerEventHandler('click', null);

    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement
      .query(By.css('h3')).nativeElement;

    expect(elem.innerHTML).toContain('45');
  });

});
