import express from 'express';

import { getNews } from '../controller/newsController.js';

const Route = express.Router();


Route.get('/news', getNews);


export default Route;