const express = require('express');
const app = express();
const SERVER_PORT =  process.env.port || 3001;

app.get('/', (req, res) => {
    res.send('Full Stack Lab Exercise - Week4');
});

app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

app.get('/user', (req, res) =>{
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'patel';

    res.json({firstname, lastname});
});

app.post('/user/:firstname/:lastname', (req, res) =>{
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;

    res.json({firstname,lastname});

})

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})