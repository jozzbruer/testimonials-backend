import express, { NextFunction, Request, Response } from 'express';
import routes from './routes/routes';

const app = express();
// Allow CORS

app.use((request, response, next) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

app.use(express.json());

app.use('/api/v1/', routes);

app.use((request: Request, response: Response, next: NextFunction) => {
	response.status(404).json({ message: 'Cannot find this endpoint' });
});

export default app;
