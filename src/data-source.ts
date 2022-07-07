import { DataSource } from "typeorm"

require("dotenv").config()
export const AppDataSource = 
    process.env.NODE_ENV ? new DataSource({
        
    })
