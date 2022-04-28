import {obtenerRobots} from "./arreglos";


xdescribe('Pruebas de arreglos', ()=>{
  it('Debe de retornar al menos 2 robots', () => {
    const res = obtenerRobots();

    expect(res.length).toBeGreaterThanOrEqual(2);
  });

  it('Debo tener Megaman y Robocop', () => {
    const resp = obtenerRobots();

    expect(resp).toContain('Megaman');
    expect(resp).toContain('Robocop');
  });
});
