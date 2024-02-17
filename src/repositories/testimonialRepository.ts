import { prismaClient } from '../database/prismaClient';

export class TestimonialRepository {
	async create(testimonial: string, name: string) {
		return await prismaClient.testimonial.create({
			data: {
				testimonial,
				author: {
					create: {
						name,
					},
				},
			},
		});
	}

	async getAll() {
		return await prismaClient.testimonial.findMany();
	}
}
