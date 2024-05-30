const _brand = Symbol('_brand');
const _motor = Symbol('_motor');
const _color = Symbol('_color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  cloneCar() {
    const current = this;
    return Object.assign(Object.create(Object.getPrototypeOf(current)), {
      [_brand]: undefined,
      [_motor]: undefined,
      [_color]: undefined,
    });
  }
}
