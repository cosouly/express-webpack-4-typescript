import createError, { HttpError } from "http-errors";
import express, {
  Application,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler
} from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import routers, { Router } from "./routes";

export default class App {
  public app: Application = express();

  constructor(params: { routers: Router[]; port: number }) {
    // view engine setup
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "pug");

    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, "public")));

    routers.forEach(router => {
      this.app.use(router.path, router.controller.router);
    });

    // catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      next(createError(404));
    });

    // error handler
    this.app.use(
      (err: HttpError, req: Request, res: Response, next: NextFunction) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "development" ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render("error");
      }
    );
  }

  listen = () => {
    this.app.listen(8000, () => {
      console.log("  App is running at http://localhost:8000");
      console.log("  Press CTRL-C to stop\n");
    });
  };
}
