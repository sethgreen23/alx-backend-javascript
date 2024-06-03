export default function getListStudentIds(lstObj) {
  return (lstObj.constructor === Array) ? lstObj.map((obj) => obj.id) : [];
}
