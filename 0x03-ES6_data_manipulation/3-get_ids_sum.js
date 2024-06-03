export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((acc, obj) => acc + obj.id, 0);
  }
  return 0;
}
