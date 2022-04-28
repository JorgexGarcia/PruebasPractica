import {FormularioRegister} from "./formularios";
import {FormBuilder} from "@angular/forms";


xdescribe('Pruebas Formularios', () => {

  let form: FormularioRegister;

  beforeEach(()=>{
    form = new FormularioRegister(new FormBuilder());
  });

  it('Debe de crear un formulario con dos campos', function () {
    expect(form.form.contains('email')).toBeTruthy();
    expect(form.form.contains('password')).toBeTruthy();
  });

  it('El email debe ser obligatorio', function () {
    const control = form.form.get('email');
    control!.setValue('');
    expect(control!.valid).toBeFalsy();
  });

  it('El email debe ser un email válido', function () {
    const control = form.form.get('email');
    control!.setValue('asdfsf');
    expect(control!.valid).toBeFalsy();
  });

});
