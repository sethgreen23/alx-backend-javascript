export default function getStudentsByLocation(students, location) {
  if (Array.isArray(students) && typeof location === 'string') {
    return students.filter((obj) => obj.location === location);
  }
  return [];
}
