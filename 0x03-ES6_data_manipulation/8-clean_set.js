export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const array = [...set];
  const filteredArray = array.filter((value) => value.slice(0, startString.length) === startString);
  return filteredArray.map((value) => value.slice(startString.length)).join('-');
}
