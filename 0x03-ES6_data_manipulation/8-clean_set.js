export default function cleanSet(set, startString) {
  if (typeof set !== 'object') return '';
  if (typeof startString !== 'string') return '';
  if (startString.length === 0) return '';
  return [...set].filter((value) => value.slice(0, startString.length) === startString).map((value) => value.slice(startString.length)).join('-');
}
