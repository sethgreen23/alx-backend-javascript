const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  let generalList = [];
  const sweList = [];
  const csList = [];
  fs.createReadStream(path, { encoding: 'utf-8' })
    .on('data', (chunk) => {
      if (chunk !== '') generalList = chunk.split('\n');
    })
    .on('end', () => {
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
        return resolve();
      }
      return reject(new Error('Cannot load the database'));
    })
    .on('error', () => reject(new Error('Cannot load the database')));
});

module.exports = countStudents;
