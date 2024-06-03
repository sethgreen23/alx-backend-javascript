export default function updateStudentGradeByCity(students, location, newGrades) {
  return students.filter((obj) => obj.location === location).map((ob) => {
    for (const gradeObj of newGrades) {
      if (gradeObj.studentId === ob.id) {
        const objClone = JSON.parse(JSON.stringify(ob));
        objClone.grade = gradeObj.grade;
        return objClone;
      }
    }
    const objClone = JSON.parse(JSON.stringify(ob));
    objClone.grade = 'N/A';
    return objClone;
  });
}
