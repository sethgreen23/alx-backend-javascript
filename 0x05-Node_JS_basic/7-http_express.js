const express = require('express');
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
        let response = '';
        generalList.forEach((line, index) => {
          if (index !== 0 && line.trim() !== '') {
            const lineList = line.trim().split(',');
            if (lineList[3] === 'CS') {
              csList.push(lineList[0]);
            } else if (lineList[3] === 'SWE') {
              sweList.push(lineList[0]);
            }
          }
        });
        const totalStudents = csList.length + sweList.length;
        response += `Number of students: ${totalStudents}\n`;
        if (csList.length > 0) response += `Number of students in CS: ${csList.length}. List: ${csList.join(', ')}\n`;
        if (sweList.length > 0) response += `Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`;
        return resolve(response);
      }
      return reject(new Error('Cannot load the database'));
    })
    .on('error', () => reject(new Error('Cannot load the database')));
});

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((data) => {
    res.send(`This is the list of our students\n${data.toString()}`);
  })
    .catch((error) => {
      res.statusCode = 500;
      res.end(error.message);
    });
});
app.listen(1245);

module.exports = app;
