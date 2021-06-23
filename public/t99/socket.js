const VerboseSocket=true;
function disconnectSocket(){
	if (Socket) {Socket.disconnect(); Socket = null;}
}
function initSocket(port) {

	//if (!USESOCKETS) {Socket=new FakeSocketClass();return;}
	//console.log('init socket!!!')
	Socket = io(`http://localhost:${port}/`);
	Socket.on('clientId', handleClientIdSendLogin);
	// Socket.on('db', handleDB);
	// Socket.on('userJoined', handleUserJoined);
	// Socket.on('userLeft', handleUserLeft);
	// Socket.on('userMessage', handleUserMessage);

	// Socket.on('gameState', handleGameState);
	// Socket.on('dbUpdate', handleDbUpdate);

	// Socket.on('mouse', handleMouse);
	// Socket.on('show', handleShow);
	// Socket.on('hide', handleHide);

}
function handleClientIdSendLogin(data) { 
	logClientReceive('clientId',data); 
	//console.log('data received',data)
	ClientId = data.clientId; 
	sendLogin(valf(Username, 'hansi')); 
}

function sendLogin(username) { logClientSend('login', username); Socket.emit('login', { data: username }); }

//#region logging helpers: keeping track of messages!
function logClientSend(type, data) {
	MessageCounter++;
	if (VerboseSocket) console.log('#' + MessageCounter, 'send', type, data)
}
function logClientReceive(type, data) {
	MessageCounter++;
	if (VerboseSocket) console.log('#' + MessageCounter, 'receive', type, data)
}
//#endregion
