import { Socket } from "socket.io";

export const desconectado = (cliente: Socket) => {
  cliente.on("disconnect", () => {
    console.log("Usuario fuera de linea");
  });
};

export const mensaje = (cliente: Socket) => {
  cliente.on("message", (data: { de: string; cuerpo: string }) => {
    console.log("Mensaje recibido", data);
  });
};
