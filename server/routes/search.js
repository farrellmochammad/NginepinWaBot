import { Router } from 'express';
import Bot from '../controllers/Bot';

const botRouter = Router();

botRouter.post('/incoming', Bot.googleSearch);

export default botRouter;