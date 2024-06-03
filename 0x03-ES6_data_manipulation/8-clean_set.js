export default function cleanSet(set, startString) {
  if (typeof set !== 'object') return '';
  if (typeof startString !== 'string') return '';
  if (startString.length === 0) return '';
  const array = [];
  set.forEach((value) => {
    if (value.slice(0, startString === '' ? 1 : startString.length) === startString) {
      array.push(value.slice(startString.length));
    }
  });
  return array.join('-');
}
