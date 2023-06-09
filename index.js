const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyPaser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;
 const app = express();
 app.use(morgan('dev'));
 app.use(bodyPaser.json());

//  app.all('/dishes',(req,res,next) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
//  });

//  app.get('/dishes', (req,res,next) =>{
//     res.end('Great Will send you all dishes to you!');
//  });

//  app.post('/dishes', (req,res,next) =>{
//     res.end("Will add the dish:" + req.body.name + 
//      'with details: ' +req.body.description);
//  })

//  app.put('/dishes', (req,res,next) =>{
//     res.statusCode = 403;
//     res.end('PUT operation is not supported on the dishes.');
//  })

//  app.delete('/dishes', (req,res,next) =>{
//     res.end('Deleting all dishes!');
//  });

//  app.get('/dishes/:dishId', (req,res,next) =>{
//     res.end('Great Will send details of the dish: ' 
//      +req.params.dishId+ ' to you!');
//  });

//  app.post('/dishes/:dishId', (req,res,next) =>{
//     res.statusCode = 403;
//     res.end('POST operation is not supported on the /dishes/ ' +req.params.dishId);
//  })

//  app.put('/dishes/:dishId', (req,res,next) =>{
//     res.write('Updating the dish: ' +req.params.dishId + '\n');
//     res.end('Will update the dish: ' +req.body.name +
//         'with details' +req.body.description);
//  })

//  app.get('/dishes/:dishId', (req,res,next) =>{
//     res.end('Deleting dish: ' +req.params.dishId);
//  });

 app.use('/dishes', dishRouter);
 app.use(express.static(__dirname+ '/public'));

 app.use((req,res,next) =>{
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is Express Server</h1></body></html>')
 });


 const server = http.createServer(app);

 server.listen(port,hostname,() =>{
    console.log(`Server running at http://${hostname}:${port}`);
 })