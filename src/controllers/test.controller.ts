import { Request, Response, NextFunction } from 'express';

export class TestController {
	get(req: Request, res: Response, next: NextFunction) {
		return res.status(200).send('test route works');
	}
}
