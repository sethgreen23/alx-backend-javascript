export default function cleanSet(set, startString) {
  const array = [];
  set.forEach((value) => {
    if (value.slice(0, startString === '' ? 1 : startString.length) === startString) {
      array.push(value.slice(startString.length));
    }
  });
  return array.join('-');
}
