import {EventEmitter} from "@angular/core";

export class Jugador2 {

  hp: number;
  hpCambia = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  recibeDanyo(danyo: number){

    if(danyo >= this.hp) {
      this.hp = 0;
    }
    else {
      this.hp = this.hp -danyo;
    }

    this.hpCambia.emit(this.hp);

  }
}
