import { Router } from 'express';
import { TestimonialContoller } from '../controllers/testimonialController';

const routes = Router();

const { create } = new TestimonialContoller();
routes.post('/create', create);

export default routes;
