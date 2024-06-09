<<<<<<< HEAD
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/WebDevProjects/Cash Transaction/') {  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
=======
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/WebDevProjects/Cash Transaction/') {  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
>>>>>>> 384228e6e3336da843d4b7e30be7dcec3f992eb9
