const express = require('express');
const app = express();
app.use(express.json());
app.get('/health',(req,res) => {
    res.json({
        success:true,
        data : {message :'FedAPI is Running'},
        error : null,
    });
});

module.exports =app;