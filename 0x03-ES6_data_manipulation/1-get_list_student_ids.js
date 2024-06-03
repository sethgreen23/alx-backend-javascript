export default function getListStudentIds(listObj) {
  if (listObj.constructor === Array) {
    const keys = listObj.every((obj) => Object.keys(obj).toString() === ['id', 'firstName', 'location'].toString());
    if (keys) {
      return listObj.map((obj) => obj.id);
    }
  }
  return [];
}
