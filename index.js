import express from 'express';
import bodyParser from 'body-parser';

import getClient from "./db";

const app = express();

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

app.listen(8080, () => {
    console.log(`Server is running`);
});
