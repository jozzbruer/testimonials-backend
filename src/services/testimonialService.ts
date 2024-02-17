import { TestimonialRepository } from '../repositories/testimonialRepository';

const testimonialRepository = new TestimonialRepository();
export class TestimonialService {
	async create(testimonial: string, name: string) {
		return await testimonialRepository.create(testimonial, name);
	}

	async getAll() {
		return await testimonialRepository.getAll();
	}
}
