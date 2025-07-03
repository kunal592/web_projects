
import express from "express"
import dotenv from "dotenv"

import chalk from "chalk"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";


dotenv.config();


const app = express()
const port = process.env.PORT
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

app.use(express.json);
app.use("/api/auth", authRoutes)

// app.listen(port, () => {
//     console.log(warning(`http://localhost:${port}`));
//     connectDB();
// });

app.listen(port, () => {
    console.log(warning(`http://localhost:${port}`));
    (async () => {
        await connectDB();
    })();
});
