import { Stats } from './stats';
import { Fighter } from './fighter'
import { Pokemon } from './pokemon'
import { DC } from './dc'
import { Marvel } from './marvel'
import { StarWars } from './starWars'
import { DragonBall } from './dragonBall'

class Combat <T extends (Pokemon | DC | Marvel | StarWars | DragonBall )> {
  constructor(private fighter1: T, private fighter2: T) {
  }

  start() {
    if (this.fighter1.getStats().speed >= this.fighter2.getStats().speed) {     
      if (this.fighter1.getStats().speed > 75) {
        console.log(`Comienza los ataques ${this.fighter2.getName()} debido a su gran velocidad`);
      } else {
        console.log(`Comienza atacando ${this.fighter2.getName()} debido a que ${this.fighter1.getName()} es mas lento`);
      }
      let attack1: number = this.fighter1.getStats().attack;
      let attack2: number = this.fighter2.getStats().attack;
      let deff1: number = this.fighter1.getStats().defense;
      let deff2: number = this.fighter2.getStats().defense;
    } else  {      
      if (this.fighter1.getStats().speed > 75) {
        console.log(`Comienza los ataques ${this.fighter2.getName()} debido a su gran velocidad`);
      } else {
        console.log(`Comienza atacando ${this.fighter2.getName()} debido a que ${this.fighter1.getName()} es mas lento`);
      }
      let attack1: number = this.fighter2.getStats().attack;
      let attack2: number = this.fighter1.getStats().attack;
      let deff1: number = this.fighter2.getStats().defense;
      let deff2: number = this.fighter1.getStats().defense;
    }

    let turno = 1;

    do {
      console.log(`\n\nTurno ${turno}`);

      let dmg1: number = Math.floor(this.fighter1.getDmg(this.fighter2) * this.fighter1.efectivity(this.fighter2));
      console.log(`${this.fighter1.getName()} ataco a ${this.fighter2.getName()} y le quito ${dmg1.toFixed(0)}`);
      this.fighter2.getStats().HP -= dmg1;
      if (this.fighter2.getStats().HP > 0) {
        console.log(`${this.fighter2.getName()} se quedo a ${this.fighter2.getStats().HP.toFixed(0)}`);
      } else {
        console.log(`${this.fighter2.getName()} ha sido debilitado`);
        console.log(`${this.fighter1.getName()} GANA EL COMBATE!!`);
        console.log(`\n\n${this.fighter1.getPhrase()}`);
      }

      console.log();


      let dmg2: number = Math.floor(this.fighter2.getDmg(this.fighter1) * this.fighter2.efectivity(this.fighter1));
      console.log(`${this.fighter2.getName()} ataco a ${this.fighter1.getName()} y le quito ${dmg2.toFixed(0)}`);
      this.fighter1.getStats().HP -= dmg2;
      if (this.fighter1.getStats().HP > 0) {
        console.log(`${this.fighter1.getName()} se quedo a ${this.fighter1.getStats().HP.toFixed(0)}`);
      } else {
        console.log(`${this.fighter1.getName()} ha sido debilitado`);
        console.log(`${this.fighter2.getName()} GANA EL COMBATE!!`);
        console.log(`\n\n${this.fighter2.getPhrase()}`);
      }

      turno++;
    } while ((this.fighter1.getStats().HP > 0) && (this.fighter2.getStats().HP > 0));

  }

  combatResult(): string {
    if (this.fighter1.getStats().speed >= this.fighter2.getStats().speed) { 
      let attack1: number = this.fighter1.getStats().attack;
      let attack2: number = this.fighter2.getStats().attack;
      let deff1: number = this.fighter1.getStats().defense;
      let deff2: number = this.fighter2.getStats().defense;
    } else  { 
      let attack1: number = this.fighter2.getStats().attack;
      let attack2: number = this.fighter1.getStats().attack;
      let deff1: number = this.fighter2.getStats().defense;
      let deff2: number = this.fighter1.getStats().defense;
    }

    do {

      let dmg1: number = Math.floor(this.fighter1.getDmg(this.fighter2) * this.fighter1.efectivity(this.fighter2));
      this.fighter2.getStats().HP -= dmg1;
      if (this.fighter2.getStats().HP <= 0) {
        return this.fighter1.getName();
      } 


      let dmg2: number = Math.floor(this.fighter2.getDmg(this.fighter1) * this.fighter2.efectivity(this.fighter1));
      this.fighter1.getStats().HP -= dmg2;
      if (this.fighter1.getStats().HP <= 0) {
        return this.fighter2.getName();
      } 

    } while ((this.fighter1.getStats().HP > 0) && (this.fighter2.getStats().HP > 0));

    return '';
  }
}