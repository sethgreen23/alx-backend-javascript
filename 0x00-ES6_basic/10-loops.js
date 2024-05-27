export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [];
  for (const idx of array) {
    const value = array[idx];
    arrayCopy[idx] = appendString + value;
  }

  return arrayCopy;
}
