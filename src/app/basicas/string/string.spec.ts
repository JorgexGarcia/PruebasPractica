import {mensaje} from "./string";


xdescribe('Pruebas de string', () => {

  it('Debe de regresar un string', () => {
    const resp = mensaje('Jorge');

    expect(typeof resp).toBe('string');
  });

  it('Debe de contener un saludo con el nombre enviado', () => {

    const nombre = 'Juan';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });

});

