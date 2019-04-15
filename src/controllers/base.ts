import express, { Router } from "express";
import core from "express-serve-static-core";
import { objectProperty } from "babel-types";

export default abstract class Base {
  private coreRouter: core.Router;

  constructor() {
    this.coreRouter = express.Router();

    this.init();
  }

  public get router(): core.Router {
    return this.coreRouter;
  }

  protected init() {}
}
