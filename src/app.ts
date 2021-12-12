import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send('Hello world!');
});

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
