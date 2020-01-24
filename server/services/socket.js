/**
 * USAGE:
 * to use the socket anywhere else in the project
 * 1. include this file `var socketService = require('services/socket');`
 * 2. example of how to emit to client - socketService.io.emit('marketPrices', {msg: 'test'});
 */

const socket_io = require('socket.io');
const io = socket_io();
let socketService = {};

socketService.io = io;

io.on('connection', function(socket) {
	console.log('A user connected');
});

// socketService.sendNotification = function() {
// 	io.sockets.emit('hello', { msg: 'Hello World!' });
// };

module.exports = socketService;
