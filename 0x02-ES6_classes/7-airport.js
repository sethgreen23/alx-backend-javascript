export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (name.constructor !== String) {
      throw new TypeError('Name must be a String');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (code.constructor !== String) {
      throw new TypeError('Code must be a String');
    }
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
