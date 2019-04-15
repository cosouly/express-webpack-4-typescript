import express, { Request, Response, NextFunction } from "express";
import core from "express-serve-static-core";
import Base from "./base";

export default class Users extends Base {
  init() {
    this.router.get("/", this.renderUsers);
    this.router.post("/", this.postUsers);
  }

  renderUsers(req: Request, res: Response, next: NextFunction) {
    res.send("this is get");
  }

  postUsers(req: Request, res: Response, next: NextFunction) {
    res.send("this is post");
  }
}
