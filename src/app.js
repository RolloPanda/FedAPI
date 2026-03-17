const express = require('express');
const app = express();
app.use(express.json());
const gamesRouter = require ('./routes/games.routes');

app.use('/games',gamesRouter);
app.get('/health',(req,res) => {
    res.json({
        success:true,
        data : {message :'FedAPI is Running'},
        error : null,
    });
});

module.exports =app;