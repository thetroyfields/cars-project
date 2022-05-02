import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable()
export class CarService {
  cars: Car[] = [
      new Car(
        'Toyota Tundra',
        'Redesigned from the ground up and engineered for adventure, the 2022 Tundra is our toughest, most capable, most advanced Tundra to date.',
        35950,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9k1aeORiVqc5ZWZYWbj2vzvH5pOc7RuGY6Q&usqp=CAU'
      ),
    
      new Car(
        'Subaru Outback',
        'Designed for unlimited adventure and uncompromising safety, the 2022 Outback features the confidence of standard Symmetrical All-Wheel Drive with up to 33 MPG** and the advanced protection of both standard EyeSight® Driver Assist Technology and the available DriverFocus® Distraction Mitigation System. And it’s engineered to last, with 97% of Outback vehicles sold in the last 10 years still on the road today. For 2022, an even higher level of Outback capability is now available: the all-new Subaru Outback Wilderness, featuring extensive all-terrain upgrades including an even more surefooted drivetrain, increased ground clearance, rugged exterior cladding, and a stylish, unique interior.',
        27145,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU1R1jKLinA_qln0f7oMsO6oNOEtbBgi-hw&usqp=CAU'
      ),
      new Car(
      'Subaru WRX',
      'The all-new 2022 Subaru WRX is here to take rally-born, high-performance driving further than ever before, with a new, more powerful turbocharged SUBARU BOXER engine, an upgraded track-tuned suspension, the legendary grip of Symmetrical All-Wheel Drive, and a resculpted, athletic exterior that takes inspiration from its championship motorsport heritage with an eye to the future. The WRX represents decades of rally racing experience translated and re-engineered for unleashed power, precision handling, and thrilling performance.',
      29105,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3Bb_xk26W8gwT-_Yq3e3fmsow4FWPJI18Q&usqp=CAU',
      )
  ];

  getCar(index: number) {
    return this.cars[index];
  }

  getCars() {
	  return this.cars.slice();
  }
}



