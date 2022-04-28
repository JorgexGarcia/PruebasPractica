import { Component, OnInit } from '@angular/core';
import {MedicoService} from "./medico.service";

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: []
})
export class MedicoComponent implements OnInit {

  constructor(private service: MedicoService) { }

  medicos:any[] = [];

  ngOnInit(): void {
  }

  saludarMedico(nombre:string){
    return `Saludos ${nombre}`;
  }

  obtenerMedicos(){

    this.service.getMedicos().subscribe(resp => {
      this.medicos = resp;
    });

  }

}
