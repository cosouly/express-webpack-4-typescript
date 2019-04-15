import express, { Request, Response, NextFunction } from "express";
import core from "express-serve-static-core";
import Base from "./base";

export default class Home extends Base {
  init() {
    this.router.get("", this.renderIndex);
  }

  renderIndex(req: Request, res: Response, next: NextFunction) {
    res.render("index", { title: "this is home page" });
  }
}
