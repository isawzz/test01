const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const path = require('path');
const fs = require('fs');

//#region get routes
app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});
app.use(express.static(__dirname)); //Serve public directory
app.use(cors());
app.get('/', (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.sendFile(path.join(__dirname, +'test999/index.html'));
});
//#endregion

const PORT = 2121;
http.listen(process.env.PORT || PORT, () => { console.log('listening on port ' + PORT); });
