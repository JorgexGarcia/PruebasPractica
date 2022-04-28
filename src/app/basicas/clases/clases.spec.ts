import {Jugador} from "./clases";


xdescribe('Pruebas Clases', ()=>{

  const jugador = new Jugador();

  beforeAll(() => {

  });
  beforeEach(() => {
    jugador.hp = 100;
  });

  afterAll(() => {

  });
  afterEach(() => {
    jugador.hp = 100;
  });

  it('Debe regresar 80', function () {

    const res = jugador.recibeDanyo(20);

    expect(res).toBe(80);
  });

  it('Debe regresar 50', function () {

    const res = jugador.recibeDanyo(50);

    expect(res).toBe(50);
  });

  it('Debe regresar 0', function () {

    const res = jugador.recibeDanyo(500);

    expect(res).toBe(0);
  });

});
