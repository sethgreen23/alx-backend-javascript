const fs = require('fs');

let generalList = [];
const sweList = [];
const csList = [];
const countStudents = (path) => {
  try {
    const content = fs.readFileSync(path, { encoding: 'utf-8' });
    if (content !== '') generalList = content.split('\n');
    if (generalList.length > 1) {
      generalList.forEach((line, index) => {
        if (index !== 0 && line !== '') {
          const lineList = line.split(',');
          if (lineList[3] === 'CS') {
            csList.push(lineList[0]);
          } else {
            sweList.push(lineList[0]);
          }
        }
      });
      const totalStudents = csList.length + sweList.length;
      console.log(`Number of students: ${totalStudents}`);
      if (csList.length > 0) console.log(`Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`);
      if (sweList.length > 0) console.log(`Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
