import { Router } from 'express';
import { TestimonialContoller } from '../controllers/testimonialController';

const routes = Router();

const { create, getAll } = new TestimonialContoller();
routes.post('/create', create);
routes.get('/get', getAll);

export default routes;
