const http = require('http');
const fs = require('fs');

const countStudents = (path = './database.csv') => new Promise((resolve, reject) => {
  let generalList = [];
  const sweList = [];
  const csList = [];
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      generalList = data.split('\n').filter((line) => line.trim() !== '');
      if (generalList.length > 1) {
        let response = '';
        generalList.slice(1).forEach((line) => {
          const lineList = line.split(',');
          if (lineList[3] === 'CS') {
            csList.push(lineList[0]);
          } else if (lineList[3] === 'SWE') {
            sweList.push(lineList[0]);
          }
        });
        const totalStudents = csList.length + sweList.length;
        response += `Number of students: ${totalStudents}\n`;
        if (csList.length > 0) response += `Number of students in CS: ${csList.length}. List: ${csList.join(', ')}\n`;
        if (sweList.length > 0) response += `Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`;
        resolve(response);
      } else {
        reject(new Error('Cannot load the database'));
      }
    }
  });
});

const path = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const endpoint = req.url;
  if (endpoint === '/students') {
    countStudents(path).then((data) => {
      res.end(`This is the list of our students\n${data.toString()}`);
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
