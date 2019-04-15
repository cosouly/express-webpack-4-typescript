import App from "./app";
import routers from "./routes";

const app = new App({ routers: routers, port: 8000 });

app.listen();
