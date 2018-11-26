'use strict';

const apiServices = require('../app/api/controller');
const routers = (app) =>{
	app.use('/api',apiServices);
};

module.exports = routers;