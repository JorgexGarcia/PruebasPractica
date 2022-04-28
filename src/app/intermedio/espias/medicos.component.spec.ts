import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {Observable} from "rxjs";


xdescribe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {

      spyOn(servicio, 'getMedicos').and.callFake(() => {
        const a = new Observable(subscribe => {
          subscribe.next(['medico1', 'medico2', 'medico3'])
          subscribe.complete();
        });
        console.log(a)
        return a
      });

      componente.ngOnInit();
      expect(componente.medicos.length).toBeGreaterThan(0);
    });

  it('Debe de llamar al servidor para agregar un médico', function () {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(_ => {
      return new Observable(subscribe => {
        subscribe.complete();
      });
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Debe agregar un médico', function () {
    spyOn(servicio, 'agregarMedico').and.returnValue( new Observable(
      subscribe => {
      subscribe.next({id:1, nombre:'Juan'});
      subscribe.complete();
    }));

    componente.agregarMedico();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Si falla, la propiedad debe ser igual al error del servicio', function () {
    const miError = 'No se pudo agregar el médico';
    spyOn(servicio, 'agregarMedico').and.returnValue( new Observable(
      subscribe => {
        subscribe.error(miError)
        subscribe.complete();
      }));

    componente.agregarMedico();
    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe llamar al servidor para borrar un médico', function () {
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue( new Observable(
      subscribe => {
        subscribe.complete();
      }));
    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No debe llamar al servidor para borrar un médico', function () {
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue( new Observable(
      subscribe => {
        subscribe.complete();
      }));
    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });

});
