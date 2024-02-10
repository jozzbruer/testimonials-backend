import { NextFunction, Request, Response } from 'express';
import { TestimonialService } from '../services/testimonialService';

const testimonialService = new TestimonialService();

export class TestimonialContoller {
	async create(request: Request, response: Response, next: NextFunction) {
		try {
			const { testimonial, author } = request.body;
			const result = await testimonialService.create(testimonial, author);
			return response.status(200).json(result);
		} catch (error) {
			response.status(500).json({ message: `Something happened ${error}` });
		}
	}
}
