/**
 * Retrieves students in a given loction.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students -The list of students.
 * @param {String} city - The loction.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
