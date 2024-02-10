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
}
