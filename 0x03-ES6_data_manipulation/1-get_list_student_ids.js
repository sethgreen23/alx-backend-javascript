export default function getListStudentIds(listObj) {
  if (listObj.constructor === Array) {
    const result = listObj.map((obj) => obj.id);
    return result;
  }
  return [];
}
