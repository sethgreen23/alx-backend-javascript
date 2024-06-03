export default function getListStudentIds(listObj) {
  if (listObj.constructor === Array) {
    const allObj = listObj.every((obj) => typeof obj === 'object');
    if (allObj) {
      return listObj.map((obj) => obj.id);
    }
  }
  return [];
}
