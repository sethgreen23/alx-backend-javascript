export default function getListStudentIds(listObj) {
  if (Array.isArray(listObj)) {
    return listObj.map((obj) => obj.id);
  }
  return [];
}
