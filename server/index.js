const express = require('express');
const path = require('path');
const fileRoute = require('./routes/file');
const cors = require('cors');
require('./db/db');

const app = express();

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);
//app.use(cors());
app.use(cors(corsOptions));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(3030, () => {
  console.log('server started on port 3000');
});
