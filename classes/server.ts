import http from "http";
import express from "express";
import socketIO from "socket.io";
import { SERVER_PORT } from "../global/enviroment";

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
      console.log('Nuevo cliente conectado');
    })
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  } 

  startServer() {
    this.httpServer.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}
