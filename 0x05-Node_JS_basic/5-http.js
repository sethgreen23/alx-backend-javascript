const http = require('http');
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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const endpoint = req.url;
  if (endpoint === '/students') {
    countStudents(process.argv[2]).then((data) => {
      res.end(`This is the list of our students\n${data}`);
    })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  } else if (endpoint === '/') {
    res.end('Hello Holberton School!');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}).listen(1245);

module.exports = app;
