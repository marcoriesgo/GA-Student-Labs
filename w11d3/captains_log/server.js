const express = require('express');
const app = express();

app.get('/fruits/new', (req, res)=>{
    res.send('new');
});


app.listen(3000, ()=>{
	console.log('listening on port 3000');
});