const initOptions = {/* initialization options */};
const pgp = require('pg-promise')(initOptions);

const cn = {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBDATABASE,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD
};


module.exports = pgp(cn);