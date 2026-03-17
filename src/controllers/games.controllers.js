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

const getGameById= async (req,res) => {
    try {
        const {id} = req.params;
        const result = await pool.query ('SELECT * FROM games WHERE id = $1', [id]);
    if (result.rows.length === 0) {
        return errorResponse(res, 'Game not found',404);
    }
    successResponse(res, result.rows[0]);
    } catch (error) {
        errorResponse(res,error.message);
    }
};


module.exports = {getAllGames,getGameById};