/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} newGrades - The new gades to be given to a students
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  
  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
	id: student.id,
	firstName: student.firstName,
	location: student.location,
	grade: (newGrades
	  .filter((grade) => grade.studentId === student.id)
	  .pop() || defaultGrade).grade,
      }));
  }
  return[];
}
