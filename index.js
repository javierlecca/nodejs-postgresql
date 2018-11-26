'use strict';

require('dotenv').config();

const  express 		= require('express');
const bodyParser  	= require('body-parser');
const app 			= express();
const helmet = require('helmet');


app.use(helmet());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));

// parse application/json 
app.use(bodyParser.json({limit: '50mb'}));

app.use('/documentation', express.static(__dirname + '/doc', { maxAge: 86400000 }));

require('./routes')(app);

app.listen(process.env.PORT);
console.log(`Servidor escuchando en puerto ${process.env.PORT}`);

app.on('error', err => {
	console.error(err);
});

