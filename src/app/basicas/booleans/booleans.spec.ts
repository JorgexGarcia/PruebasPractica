import {usuarioIngresado} from "./booleans";


xdescribe('Pruebas Boolean', ()=>{
  it('Debe de regresar true', ()=>{
    const resp = usuarioIngresado();

    expect(resp).toBeTruthy();
  });

});
