import Message from "../models/messageModel.js"


export const onlineUsers = new Map()


export const chatHandler = (io, socket) => {

    const userId = socket.userId

    if (!onlineUsers.has(userId)) {
        onlineUsers.set(userId, new Set())
    }

    onlineUsers.get(userId).add(socket.id)
    io.emit("user_online", { userId })

    socket.on("join_room", ({ senderId, receiverId }) => {
        const room = `room_${[senderId, receiverId].sort().join("_")}`
        socket.join(room)
    })

    socket.on("send_message", async(({ senderId, receiverId, content }) => {
        if (!content?.trim()) return

        try {
            const message = Message.create({
                sender: senderId,
                receiver: receiverId,
                content: content.trim()
            })

            const room = `room_${[senderId, receiverId].sort().join("_")}`
            io.to(room).emit('receive_message', {
                _id: message._id,
                sender: senderId,
                receiver: receiverId,
                content: message.content,
                createdAt: message.createdAt
            })

        } catch (error) {
            socket.emit("message_error", { error: "Error is sending message" })
        }

    }))

    socket.on("typing", ({ senderId, receiverId }) => {
        const room = `room_${[senderId, receiverId].sort().join("_")}`
        socket.to(room).emit("user_typing", { userId: senderId })
    })

    socket.on("disconnet", () => {
        const sockets = onlineUsers.get(userId)
        if (sockets) {
            sockets.delete(socket.id)
        }
        if (socket.size === 0) {
            onlineUsers.delete(userId)
            io.emit("user_offline", { userId })
        }
    })



}