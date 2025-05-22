import {createPool} from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); //carga variables del .env

export const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT || 3306,
    database: process.env.DATABASE,
    ssl: {
        rejectUnauthorized: false // Necesario para Railway u otros servicios CLoud
    }
});