import Server from './classes/server';
import { router } from "./routes/router";
import bodyParser from "body-parser";
import cors from "cors";

const server = Server.instance;

//BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//Habilitacion del CORS
server.app.use(cors({ origin: true, credentials: true }));

//Rutas de servicios
server.app.use("/", router);

server.startServer();
