export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Building Class can\'t be instantiated directly.');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (!(sqft.constructor === Number)) {
      throw new TypeError('Sqft must be a Number');
    }
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
