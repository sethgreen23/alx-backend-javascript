export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (size.constructor !== Number) {
      throw new TypeError('Size must be a Number');
    }
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (location.constructor !== String) {
      throw new TypeError('Location must be a String');
    }
    this._location = location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
