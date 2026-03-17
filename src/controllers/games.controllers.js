const pool = require ('../../db');
const {successResponse, errorResponse} = require ("../../utils/response");

const getAllGames = async (req,res) => {
    try {
        const result = await pool.query ('SELECT * FROM games ORDER BY id ASC');
        successResponse(res,result.rows);
        
    }
    catch (error) {
        errorResponse(res,error.message);
    }
};

module.exports = {getAllGames};