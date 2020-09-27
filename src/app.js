const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./errors/error-handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', require('./routes/task-route'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
