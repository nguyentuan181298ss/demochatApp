import { io } from "socket.io-client"

const strapiEndpoint = 'http://192.168.1.10:1337'

console.log('strapiEndpoint', strapiEndpoint)
export const socket = io(strapiEndpoint)
