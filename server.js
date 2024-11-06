const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res) => res.send("Hello from blue-green app"));

app.listen(PORT, () => console.log('App running on https://localhost:${PORT}'));

