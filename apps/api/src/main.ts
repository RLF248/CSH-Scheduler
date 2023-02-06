/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as express from 'express';
import * as path from 'path';
import { scheduleData } from './app/api.data';
const app = express();

app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.post('/api', (req) => {
  const { teams, rink, time, address } = req.body;
  const newData = {
    teams: teams,
    rink: rink,
    time: time,
    address: address,
  };
  scheduleData.push(newData);
});
console.log(scheduleData);

app.get('/api', (req, res) => {
  res.send(scheduleData);
});
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
