import { app } from "./app.mjs";
import blockchainRoutes from './routes/blockchain-routes.mjs'

app.use('/api/blocks/', blockchainRoutes);

const PORT = process.argv[2] || 3010;

app.listen(PORT, () => console.log(`server är startad på adress ${process.argv[3]} och körs i läge${process.env.NODE_ENV}`))