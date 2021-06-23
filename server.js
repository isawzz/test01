const Verbose = true;
const PORT = process.env.PORT || 3131;

//#region require & const
const BASEPATH = './public/BASE/';
const SERVERCODE = './SERVER/';
const DATAPATH = './public/DATA/';
const path = require('path');
const fs = require('fs');
const base = require(BASEPATH + 'base.js');
const common = require(SERVERCODE + 'common.js');

const express = require('express');
const app = express();
const cors = require('cors');

//new code
// var http = require("http");
// var server = http.createServer(app);

//old code
const http = require('http').Server(app);
var io = require('socket.io')(http, { cors: { origin: true } });

app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(cors());


//#endregion

const logger = new common.LoggerSimple(Verbose, io);
const userman = new common.UsermanClass(logger);

io.on('connect', browser => {	
	userman.handleConnectReplyClientId(browser);
});

http.listen(PORT, () => { console.log('listening on port ' + PORT); });



