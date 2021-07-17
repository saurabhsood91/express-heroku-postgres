import express from 'express';
import bodyParser from 'body-parser';

import getClient from "./db";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!!!'
    });
});

app.get('/users', (req, res) => {
    const client = getClient();
   client.connect();

   client.query('select * from users', (err, result) => {
       console.log('err', err)
       console.log('result', result)
       return res.status(200).json(result.rows)
   })
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
