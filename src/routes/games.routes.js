const express= require ('express');
const router = express.Router();
const gamesController = require('../controllers/games.controllers');

router.get('/',gamesController.getAllGames);

module.exports =router;