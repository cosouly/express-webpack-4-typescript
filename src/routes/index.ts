import {
  HomeController,
  UsersContorller,
  BaseController
} from "../controllers";

export interface Router {
  path: string;
  controller: BaseController;
}

const Home = new HomeController();
const Users = new UsersContorller();

const routers: Router[] = [
  { path: "/", controller: Home },
  { path: "/users", controller: Users }
];

export default routers;
