import { Application, NextFunction, Request, Response } from 'express'
import { TestController } from '../controllers/test.controller'
import { RouteInterface } from '../models/route.interface'

export class TestRoutes implements RouteInterface {
	private testController = new TestController()

	constructor(public app: Application, basePath: string = '') {
		this.addRoutes(basePath)
	}

	addRoutes(basePath: string): void {
		this.app.get(`/${basePath}/`, (req: Request, res: Response, next: NextFunction) => {
			return this.testController.get(req, res, next)
		})
	}
}
