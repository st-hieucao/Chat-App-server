import { Server } from "socket.io";
import userController from "../controllers/userController.js";

const connectSocket = (server) => {
  const io = new Server(server, {
    cors: {
      // origin: "http://localhost:3000",
      origin: "https://shrouded-sierra-51997.herokuapp.com",
      methods: ["GET", "POST", "PUT", "PATCH"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });

  const users = {};

  io.on("connection", (socket) => {
    socket.on("user-connected", (userId) => {
      console.log('user connect')
      users[socket.id] = userId;
      socket.join(userId);
      userController.updateStatus(userId, true);
      io.emit('new-user');
    });

    // handle call video
    socket.on("callUser", ({ idUserToCall, signalData, from, name }) => {
      console.log('call user', { idUserToCall, from, name });
      io.to(idUserToCall).emit("callUser", { signal: signalData, from, name });
    });

    socket.on("answerCall", (data) => {
      console.log(' -------- answerCall call');
      io.to(data.to).emit("callAccepted", data.signal)
    });

    socket.on("callEnded", async ({ to }) => {
      console.log('call end');
      socket.to(to).emit("callEnded");
    })
    // End handel call video

    // Disconnect
    socket.on('disconnect', async () => {
      if (users[socket.id]) {
        console.log('user disconnect')
        await userController.updateStatus(users[socket.id], false);
        delete users[socket.id];
      }
    });
  });
};

export default connectSocket;
