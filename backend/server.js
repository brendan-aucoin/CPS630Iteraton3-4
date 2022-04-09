import express from 'express';
import data from './data.js';

const app = express();
//test
// Basically sending data to backend http://localhost:5050/api/items
//We are using api functions to get access to the data in the backend
app.get('/api/items', (req, res) => {
    res.send(data.items);

});

const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log('serve at http://localhost:' + port);
});

