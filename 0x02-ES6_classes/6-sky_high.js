import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (floors.constructor !== Number) {
      throw new TypeError('Floors must be a Number');
    }
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly ${this._floors} floors`;
  }
}
