/**
 * Retrives a list of students.
 * @returns {{id: Number, firstName: Srring, location: String}[]}
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Fransisco' },
    { id: 2, firstName: 'James', location: 'Columnia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
