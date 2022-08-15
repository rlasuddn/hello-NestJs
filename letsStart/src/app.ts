import * as express from "express"
import catsRouter from "./cats/cats.route"

//싱글톤 패턴

const port: number = 8000

class Server {
    public app: express.Application

    constructor() {
        const app: express.Application = express() //app은 express의 인스턴스이다.
        this.app = app
    }

    private setRoute() {
        this.app.use(catsRouter)
    }

    private setMiddleware() {
        //로깅 미들웨어
        this.app.use((req, res, next) => {
            console.log("REQUEST: " + req.rawHeaders[1])
            next()
        })
        //json 미들웨어
        this.app.use(express.json())

        //API 라우터
        this.setRoute()

        //에러처리 라우터
        this.app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.send("404 NOT FOUND")
        })
    }
    public listen() {
        this.setMiddleware()
        this.app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
}

function init() {
    const server = new Server()
    server.listen()
}
init()
