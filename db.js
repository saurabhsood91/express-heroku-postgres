import {Client} from 'pg';

const DB_URL = process.env.DATABASE_URL;

const getClient = () => {
    const client = new Client({
        connectionString: DB_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
    return client
}

export default getClient