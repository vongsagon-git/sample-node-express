const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({
  hello: 'from VO - PaaS',
  stack: 'Node + Express',
  hostname: req.hostname,
  node: process.version,
  uptime_s: Math.floor(process.uptime()),
  time: new Date().toISOString()
}));

app.get('/health', (req, res) => res.send('ok'));

app.listen(PORT, '0.0.0.0', () => console.log(`listening ${PORT}`));
