import {incremetar} from "./numeros";


xdescribe('Pruebas de números', ()=>{
  it('Debe retornar 100 si el número es mayor',() => {
    const resp = incremetar(300);

    expect(resp).toBe(100);
  });

  it('Debe retornar 100 si el número es menor',() => {
    const num = 30;
    const resp = incremetar(num);

    expect(resp).toBe(num + 1);
  });
});
