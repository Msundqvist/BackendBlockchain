export default class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        switch (statusCode) {
            case 400:
                this.status = 'Bad request, missing information';
                break;
        }
    }
}