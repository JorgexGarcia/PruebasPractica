
export class Jugador {

  hp: number;

  constructor() {
    this.hp = 100;
  }

  recibeDanyo(danyo: number){

    if(danyo >= this.hp) this.hp = 0;
    else this.hp = this.hp -danyo;

    return this.hp;

  }
}


