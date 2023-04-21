import { NextFunction, Request, Response } from 'express'

export class TestController {
	get(req: Request, res: Response, next: NextFunction) {
		return res.status(200).send('test route works')
	}
}
