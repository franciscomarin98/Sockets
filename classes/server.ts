import http from "http";
import express from "express";
import socketIO from "socket.io";
import { SERVER_PORT } from "../global/enviroment";
import * as socket_config from '../sockets/sockets.configuration';

export default class Server {

  private static _instance: Server;
  public app: express.Application;
  public port: number;
  public io: socketIO.Server;
  private httpServer: http.Server;



  private constructor() {
    this.app = express();
    this.port = SERVER_PORT;
    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);
    this.escucharSockets();
  }

  private escucharSockets() {
    console.log('Escuchando conexiones - sockets');
    this.io.on('connection',cliente => {
      console.log('Usuario en linea');

      //Aqui se escuchan todos los mensajes
      socket_config.mensaje(cliente);

      //Aqui se escuchan los cambios de estado, es decir si el usuario se desconecta
      socket_config.desconectado(cliente);
    })
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  } 

  //Funcion para iniciar el servidor
  startServer() {
    this.httpServer.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}
