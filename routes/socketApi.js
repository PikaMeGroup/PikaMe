var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.sockets.on('connection', function (socket) {
    console.log('User has connected');
    socket.on('sending message', function (data) {
        io.sockets.emit('new message', data);
    });

	socket.on('disconnect', function (data) {
		console.log('User has disconnected');
	});
});

module.exports = socketApi;