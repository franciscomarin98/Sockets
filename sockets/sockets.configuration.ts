import { Socket } from "socket.io";
import socketIO from "socket.io";


//Evento para ver el estado de la coneccion de cada usuario
export const desconectado = (cliente: Socket) => {
  cliente.on("disconnect", () => {
    console.log("Usuario fuera de linea");
  });
};

//Evento para escuchar los mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {
  cliente.on("message", (data: { de: string; cuerpo: string }) => {
    console.log("Mensaje recibido", data);
    //Emitiendo todos los mensajes
    io.emit('nuevo-mensaje', data);
  });
};
