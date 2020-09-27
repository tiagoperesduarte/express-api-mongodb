require('dotenv').config();

const express = require('express');
const configureApi = require('./configs/api-config');

const app = express();
const port = process.env.APP_PORT || 3000;

configureApi(app);

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
