import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const parent = Object.getPrototypeOf(Object.getPrototypeOf(this));
    return Object.assign(Object.create(parent),
      {
        _brand: undefined,
        _motor: undefined,
        _color: undefined,
      });
  }
}
