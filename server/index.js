require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const ctrl = require('./controller');

app.use(express.json());

const {SERVER_PORT,CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}`);
    });  
})
.catch(error => console.log(error))


app.get('/api/listings', ctrl.getAll);
app.post('/api/listings', ctrl.addHouse);
app.delete('/api/listings/:id', ctrl.deleteHouse);
