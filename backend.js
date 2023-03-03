const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>portfolio</title>
      <link rel="stylesheet" href="main.css">
      <script src="main.js" defer></script>
  </head>
  
  <body>
      <div class="container">
  
          <div class="hamburger">
              <img class="ham" src="hamnew.png" alt="">
              <img class="cross" src="try.jpg" alt="">
          </div>
          <div class="sidebar sidebargo">
              <ul>
                  <li><a href="main.html">Home</a></li>
                  <li><a href="About.html">About Me</a></li>
                  <li><a href="Contact.html">Contact</a></li>
                  <li><a href="Service.html">Service</a></li>
                  <li><a href="Blog.html">Blog</a></li>
              </ul>
          </div>
          <div class="main">
              <div class="info">
                  <div class="devinfo">
                      <div class="hello"> Hey I am</div>
                      <div class="Name">Vishal chaudhary</div>
                      <div class="About"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolores odio eligendi ex tenetur ut Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit debitis magni totam aperiam facilis voluptatibus quod hic, illum corporis modi odio quibusdam ab eligendi vel inventore. Consequuntur neque laborum aliquid, fuga facilis temporibus amet, quos possimus quia impedit obcaecati vitae autem eveniet odio blanditiis soluta voluptatum provident? Aliquid, saepe molestias! </div>
                      <div class="button">
                          <a href="/cv.text">
                              <button class="butn">Download CV</button>
                              </a>
                              <a href="/Contact.html">
                                  <button class="butn">Contact</button>
                                  </a>
                      </div>
                  </div> 
                  <div class="devpic">
                      <img src="new.png" alt="Vishal chaudhary">
  
                  </div> 
              </div>
          </div>
      </div>
  </body>
  
  </html> `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
