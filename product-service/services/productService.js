import { Client } from "pg";

const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;
const dbOptions = {
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
};

const connect = async (cb) => {
  const client = new Client(dbOptions);
  try {
    await client.connect();
    return await cb(client);
  } finally {
    client.end();
  }
};

export const getProductById = async (id) => {
  return await connect(async (client) => {
    const { rows } = await client.query(
      `select p.*, s.count from products p inner join stocks s on s.product_id = p.id and p.id = '${id}'`
    );
    return rows;
  });
};
