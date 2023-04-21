import express, { Application, NextFunction, Request, Response } from 'express'
import { TestRoutes } from './routes/test.routes'
const app: Application = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
	setupRoutes()
	console.log(`server started on port ${port}`)
})

function setupRoutes() {
	app.get('/', (req: Request, res: Response, next: NextFunction) => {
		res.status(200).send('Hello world!')
	})

	new TestRoutes(app, 'test')
}
