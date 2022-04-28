import {Jugador2} from "./jugador2";


xdescribe('Pruebas Jugador2', ()=> {
  let jugador: Jugador2;

  beforeEach(()=> {
    jugador = new Jugador2();
  });

  it('Debe emitir un evento cuando recibe daño', function () {

    let res = 0;

    jugador.hpCambia.subscribe(hp => {
      res = hp;
    });

    jugador.recibeDanyo(1000);

    expect(res).toBe(0);
  });

  it('Debe emitir un evento cuando recibe daño y sobrevivir', function () {

    let res = 0;

    jugador.hpCambia.subscribe(hp => {
      res = hp;
    });

    jugador.recibeDanyo(50);

    expect(res).toBe(50);
  });
})
