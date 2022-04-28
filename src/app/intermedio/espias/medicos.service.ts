import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";

@Injectable()
export class MedicosService {

  constructor(public http: HttpClient | null) { }

  getMedicos():Observable<any> {
    return this.http!.get<any>('...').pipe(
      map( resp => resp['medicos'] )
    );
  }

  agregarMedico( medico: any ):Observable<any>  {
    return this.http!.post<any>('...', medico )
      .pipe(
        map( resp => resp['medicos'] )
      );
  }

  borrarMedico( id: string ): Observable<any> {
    return this.http!.delete<any>('...' )
      .pipe(
        map( resp => resp['medicos'] )
      );
  }


}
