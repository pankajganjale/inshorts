import express from 'express';
import Connection from './connection/db.js';
import DefaultData from "./default.js";
import Route from './routes/route.js';

const app = express();

app.use("/", Route);

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();