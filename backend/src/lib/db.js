import chalk from "chalk";
import mongoose from "mongoose"


export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.DB_url);
console.log(chalk.bgCyanBright(`MongoDB connected: ${conn.connection.host}`));

        
    } catch (error) {
        console.log(chalk.redBright(error));
        
    }
}