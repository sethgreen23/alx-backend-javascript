import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
    this._placeholder = undefined;
  }

  cloneCar() {
    return new Car(this._placeholder, this._placeholder, this._placeholder);
  }
}
