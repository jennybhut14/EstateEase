import {Server} from "socket.io"

const io = new Server({
    cors : {
        origin : "http://localhost:5173",
    }
})

let onlineuser = [];

const adduser = (userId, socketId) =>{
    const userexists = onlineuser.find((user) => user.userId === userId);
    if(!userexists){
        onlineuser.push({userId,socketId})
    }
}

const getuser = (userId) =>{
    return onlineuser.find(user=>user.userId === userId)
}

const removeuser = (socketId) => {
    onlineuser = onlineuser.filter((user) => user.socketId !== socketId)
}



io.on("connection", (socket) => {
    socket.on("newUser", (userId)=>{
        adduser(userId, socket.id)
    })
    socket.on("sendMessage",({receiverId,data}) => {
        const receiver = getuser(receiverId)
        io.to(receiver.socketId).emit("getMessage",data)
    })
    socket.on("disconnect", ()=>{
        removeuser(socket.id)
    })
})

io.listen("4000")