const {HttpError} = require('../errors/http-errors');

const configureErrorHandler = (app) => {
    app.use(errorHandler);
};

const errorHandler = (err, req, res, next) => {
    if (err instanceof HttpError) {
        return res.status(err.statusCode).json({
            statusCode: err.statusCode,
            message: err.message
        });
    }

    next(err);
};

module.exports = configureErrorHandler;
