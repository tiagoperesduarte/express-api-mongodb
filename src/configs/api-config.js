const bodyParser = require('body-parser');

const configureDb = require('./db-config');
const configureRoutes = require('./routes-config');
const configureErrorHandler = require('./error-handler-config');

const configureApi = (app) => {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    configureDb(app);
    configureRoutes(app);
    configureErrorHandler(app);
};

module.exports = configureApi;
