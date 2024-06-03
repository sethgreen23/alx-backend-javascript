export default function getListStudentIds(listObj) {
  if (listObj.constructor === Array) {
    return listObj.map((obj) => obj.id);
  }
  return [];
}
