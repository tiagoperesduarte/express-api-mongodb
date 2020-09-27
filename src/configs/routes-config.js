const taskRoute = require('../routes/task-route');

const configureRoutes = (app) => {
    app.use('/api', taskRoute);
};

module.exports = configureRoutes;
