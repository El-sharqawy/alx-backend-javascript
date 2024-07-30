/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((s) => s.location === city).map((s) => {
    const matGrade = newGrades.find((grade) => grade.studentId === s.id && grade.grade);
    if (matGrade) {
      s.grade = matGrade.grade;
    } else {
      s.grade = 'N/A';
    }
    return s;
  });
}
