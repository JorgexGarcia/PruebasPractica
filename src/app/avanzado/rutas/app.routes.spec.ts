import {rutas} from "./app.routes";
import {MedicoComponent} from "../../intermedio2/medico/medico.component";


describe('Pruebas de rutas', ()=>{
  it('Debe existir la ruta /medico/:id', function () {
    expect(rutas).toContain(
      {path: 'medico/:id', component: MedicoComponent}
    )
  });
})
