class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
    }
}

class BadRequestError extends HttpError {
    constructor(message) {
        super(message, 400);
    }
}

class NotFoundError extends HttpError {
    constructor(message) {
        super(message, 404);
    }
}

module.exports = {
    HttpError,
    BadRequestError,
    NotFoundError
};
