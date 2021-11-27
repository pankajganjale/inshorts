import express from 'express';

import { getNews } from '../controller/newsController.js';

const Route = express.Router();


Route.get('/', getNews);


export default Route;