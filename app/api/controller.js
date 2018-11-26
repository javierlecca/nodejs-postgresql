'use strict';

const   express = require('express'),
        router  = express.Router(),
        sample	= require('./sample');


router.get('/list_messengers', sample.messengers);


module.exports = router;