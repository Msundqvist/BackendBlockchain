import { app } from "./app.mjs";

app.use('/api/blocks/', blockchainRoutes);

const PORT = process.argv[]