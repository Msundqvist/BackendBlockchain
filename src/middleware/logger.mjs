import fs from 'fs/promises';
import path from 'path';

export const logger = async (req, res, next) => {
    const filePath = path.join(__appdir, 'logs', 'app.log');
    const message = `${req.method} ${req.orginalUrl} - ${new Date().toLocaleDateString('sv-SE')} ${new Date().toLocaleTimeString('se-SE')}`


    await fs.appendFile(filePath, message + '\n');

    next();
}