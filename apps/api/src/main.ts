/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';

const app = express();
import cors = require('cors');

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/api.data.json', (req, res) => {
  fs.readFile('./data.json', 'utf-8', (err, jsonString) => {
    if (err) {
      console.log(err);
    } else {
      const scheduleData = JSON.parse(jsonString);
      res.send(scheduleData);
    }
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
