export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const values of Object.values(report.allEmployees)) {
    for (const value of values) {
      allEmployees.push(value);
    }
  }
  return allEmployees;
}
