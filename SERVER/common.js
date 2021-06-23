const base = require('../public/BASE/base.js');
const yaml = require('yaml');

class UsermanClass {
	constructor(logger, db) {
		this.logger = logger;
		if (base.isdef(db)) this.db = db; 
		this.users = {};
	}
	addUser(id) { return this.users[id] = { name: id.substring(0, 3), id: id, connected: true }; }
	disconnect() { if (id in this.users) this.users[id].connected = false; }

	handleConnectReplyClientId(client) {
		let id = client.id;
		this.logger.fromBrowser('connect',client);
		this.addUser(id);
		this.logger.toBrowser('clientId',client);
		client.emit('clientId', `your id is ${id}`);
	}
}

class LoggerSimple{
	constructor(verbose,io){
		this.verbose = verbose;
		this.msgCounter = 0; 
		this.io = io;
	}
	fromBrowser(type, client, ...args) {
		this.logg('receive '+type, client.id, 'io', ...args);
	}
	toBrowser(type, client, ...args) {
		this.logg('send '+type, 'io', client.id, ...args);
	}
	info(o){
		//let data = yaml.parse(o);
		let keys = Object.keys(o);
		let s='';
		for(const k in o){
			if (base.isString(o[k])) s+=k+': '+o[k]+' ';else s+=k+' ';
			if (k == '_serveClient') console.log(k,';',o[k]);
			if (base.isDict(o[k]) && base.isdef(o.id)) s+='id: '+o[k].id+' ';
		}
		return s;
		//return JSON.stringify(o);
	}
	logg(type, from, to) {
		//from to can be string or socket
		this.msgCounter += 1;
		if (base.nundef(from)) from='null';
		if (base.nundef(to)) to='to';
		from = base.isString(from) ? from.substring(0, 3):this.info(from); //Object.keys(from);
		to = base.isString(to) ? to.substring(0, 3):this.info(to); //Object.keys(to);
		let args = [...arguments].slice(3);
		if (this.verbose) {
			console.log(`#${this.msgCounter}:${type} (${from} to ${to})`, ...args);
		}
	}
	
}
class Logger3TierClass extends LoggerSimple{
	constructor(verbose,localSocket, remoteSocket) { 
		this.io=localSocket; 
		this.outSocket = remoteSocket; 
		this.verbose = verbose; 
		this.msgCounter = 0; 
	}

	fromRemote(type, ...args) {
		this.logg(type, 'remote', this.outSocket, ...args);
	}
	toRemote(type, ...args) {
		this.logg(type, this.outSocket, 'remote', ...args);
	}
	fromLocal(type, client, ...args) {
		this.logg(type, client, this.outSocket, ...args);
	}
	toLocal(type, client, ...args) {
		this.logg(type, this.outSocket, client, ...args);
	}
	broadcastLocals(type, ...args) {
		this.logg(type, this.outSocket, 'all local browsers', ...args);
	}
}

module.exports = { LoggerSimple, Logger3TierClass, UsermanClass };

