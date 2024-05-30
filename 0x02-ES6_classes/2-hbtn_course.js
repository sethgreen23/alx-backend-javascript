export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (!(name.constructor === String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._name;
  }

  set length(length) {
    if (!(length.constructor === Number)) {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!(students.constructor === Array && HolbertonCourse.allNumberString(students))) {
      throw new TypeError('Students must contains strings');
    }
    this._students = students;
  }

  static allNumberString(arr) {
    for (const elem of arr) {
      if (!(elem.constructor === String)) {
        return false;
      }
    }
    return true;
  }
}
