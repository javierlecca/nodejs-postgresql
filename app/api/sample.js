'use strict';

const db = require('../../general/postgresql');


exports.messengers = async (req, res) =>{
    try {
        const user = await db.any(` SELECT * FROM schema.table;`);
        return res.send(
            {
                status:true,
                message:"success request",
                data:user
            }
        );
    } 
    catch(e) {
        return res.send(
            { 
                status:false,
                message:e

            }
        );
    }
}
