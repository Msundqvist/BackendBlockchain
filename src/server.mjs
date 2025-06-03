import { app } from "./app.mjs";
import dotenv from 'dotenv'
import AppError from "./models/appError.mjs";
import errorHandler from "./middleware/errorHandler.mjs";
import { logger } from "./middleware/logger.mjs";
import blockchainRoutes from './routes/blockchain-routes.mjs'
import path from 'path';
import { fileURLToPath } from "url";


const PORT = process.env.PORT || 3010;

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
global.__appdir = dirname

if (process.env.NODE_ENV === 'development') {
    app.use(logger)
}

app.use('/api/v1/blocks', blockchainRoutes);

app.all('*', (req, res, next) => {
    next(
        new AppError(`Vi kunde inte hitta resursen du söker, ${req.originalUrl}`, 400)
    )
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`server är startad på adress ${PORT} och körs i läge ${process.env.NODE_ENV}`))